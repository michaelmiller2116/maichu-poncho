import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalForm from './ModalForm'

class AddModal extends React.Component {



  render() {
    const ponchoListState = this.props.passedState
    return (
      <div>
        <Modal style={{textAlign: 'center'}} isOpen={ponchoListState.ponchoModal}>
          <ModalHeader>{ponchoListState.clickedPoncho[0].name}</ModalHeader>
          <ModalBody>
           <ModalForm ponchoData={ponchoListState.clickedPoncho[0]} toggleState={this.props.toggleState}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggleState}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddModal;
