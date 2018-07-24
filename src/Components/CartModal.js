import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { getCart, deleteItem } from '../actions/actions'
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";


let cartObject = getCart();

class CartModal extends Component {
  constructor(props) {
    super (props)
      this.state = {
        data: []
      }
  }

  componentDidMount() {
    cartObject.then(data => {
      this.setState({ data: data.items })
    })
  }

  handleDelete(item) {
    deleteItem(item.id)
    const items = this.state.data.slice()
    const index = items.indexOf(item)
    items.splice(index, 1)
    this.setState({
      data: items
    })
  }

  render() {
    const totalDue = this.state.data.reduce((sum, item) => sum + item.price, 0)
    
    const cartItems = this.state.data.map(item => {
      console.log(item)
      return (
        <li style={{listStyleType: 'none'}}key={item.id} className='item-container'>
          <div>
            <img style={{maxHeight: '150px', maxWidth: '100px'}}src={item.image} alt=""/>
          </div>
          <div>
            <span>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <span>$ {item.price}.00</span><br />
              <span>Qty.{item.qty}</span>
            </span>
            </div>
            <Button className='modal-button' outline style={{marginBottom: '15px'}} onClick={this.handleDelete.bind(this, item)}>
              Delete Item
            </Button>
        </li>
      )
    })

    return <div>
        <Modal style={{ maxHeight: "50vh", maxWidth: "35vw", textAlign: "center" }} scrollable="true" isOpen={this.props.passedState.cartModal}>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalBody><ul>{cartItems}</ul></ModalBody>
          <ModalFooter>
            <StripeProvider apiKey="pk_test_3cyEFT9tQLPqRl38kdaNt4HE">
              <div className="example">
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
            <span>Your Total: ${totalDue}</span>
            <Button className='cancel-button' outline color="secondary" onClick={this.props.toggleState}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
  }
}

export default CartModal;