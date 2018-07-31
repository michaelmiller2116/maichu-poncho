import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { addCartItem } from '../actions/actions'

export default class ModalForm extends React.Component {
  constructor (props) {
    super (props)
      const ponchoData = this.props.ponchoData
      this.state = {
        image: ponchoData.image,
        name: ponchoData.name,
        price: ponchoData.price,
        description: ponchoData.description,
        qty: 0
      }
  }

  handleChange = (e) => {
    this.setState({qty: parseInt(e.target.value, 0)})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addCartItem(JSON.stringify(this.state))
    this.props.toggleState()
  }
  
  render() {   
    return (
      <React.Fragment>
        <img style={{ maxHeight: '100%', maxWidth: '80%' }} alt='' />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='quantity'>Qty.</Label>
            <Input value={this.state.qty} onChange={this.handleChange} type='select' name='quantity' id='quantity'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button outline>
            Add to Cart
          </Button>
          <br />
          <Button outline onClick={this.props.toggleState}>
            Cancel
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}
