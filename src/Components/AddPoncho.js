import React from 'react'
import { 
  Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap'

class AddPoncho extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      description: '',
      price: 0,
    }
  }

  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
   })
 }

  render() {
    const AddPonchoState = this.props.passedState
    return (
      <div>
        <Modal isOpen={AddPonchoState.addPonchoModal}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='name'>Name Of The Poncho</Label>
                <Input 
                type='email' 
                value={this.name} 
                onChange={this.handleChange} 
                name='name' id='name' />
              </FormGroup>

              <FormGroup>
                <Label for='image'>Add An Image</Label>
                <Input 
                type='text' 
                value={this.image}
                onChange={this.handleChange}
                name='image' 
                id='image' 
                placeholder='https://example.com' />
              </FormGroup>

              <FormGroup>
                <Label for='description'>
                  Describe The Poncho That You Will Be Adding
                </Label>
                <Input type='textarea' name='description' id='description' />
              </FormGroup>
              
              <FormGroup>
                <Label for='price'>Price Of The Poncho</Label>
                <Input type='number' name='price' id='price' placeholder='99' />
              </FormGroup>
              <Button outline>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
             <Button outline onClick={this.props.toggleState}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddPoncho


  