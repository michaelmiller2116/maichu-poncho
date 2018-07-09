import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalForm from './ModalForm'

class AddModal extends React.Component {



  render() {
    return (
      <div>
        <Modal isOpen={this.props.passState}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
           <ModalForm />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggleState}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
