import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getCart } from '../actions/actions';
import StripeCheckout from "react-stripe-checkout";


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

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      })
    })
  }

  render() {
    const cartData = this.props.passedState.clickedImage

    const cartItems = this.state.data.map(item => {
      return (
        <div className='item-container'>
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
        </div>
      )
    })


    return <div>
        <Modal style={{ maxHeight: "50vh", maxWidth: "35vw", textAlign: "center" }} scrollable="true" isOpen={this.props.passState.cartModal}>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalBody>{cartItems}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggleState}>
              Cancel
            </Button>
            <StripeCheckout token={this.onToken} stripeKey="pk_test_3cyEFT9tQLPqRl38kdaNt4HE" />
          </ModalFooter>
        </Modal>
      </div>;
  }
}

export default CartModal;