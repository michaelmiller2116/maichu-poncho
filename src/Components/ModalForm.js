import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import { addCartItem } from "../actions/actions"
import StripeCheckout from "react-stripe-checkout"


export default class ModalForm extends React.Component {
  constructor (props) {
    super (props)
      const ponchoData = this.props.ponchoData
      console.log(ponchoData, 'here')
      this.state = {
        image: ponchoData.image,
        name: ponchoData.name,
        price: ponchoData.price,
        description: ponchoData.description,
        qty: 0
      }
  }

  handleChange = (e) => {
    this.setState({qty: parseInt(e.target.value)})
  }

  handleSubmit = (e) => {
    console.log('====================================');
    console.log(this.props.toggleState);
    console.log('====================================');
    e.preventDefault()
    addCartItem(JSON.stringify(this.state))
    this.props.toggleState()
  }
  
  render() {   
    return (
      <React.Fragment>
        <img style={{maxHeight: '100%', maxWidth: '80%'}}  alt=""/>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="quantity">Qty.</Label>
            <Input value={this.state.qty} onChange={this.handleChange} type="select" name="quantity" id="quantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}
