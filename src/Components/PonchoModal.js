import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import ModalForm from './ModalForm'

class PonchoModal extends React.Component {
  render() {
    const ponchoListState = this.props.passedState
    return <div>
        <Modal style={{ textAlign: "center" }} isOpen={ponchoListState.ponchosModal}>
          <ModalHeader>{ponchoListState.clickedPoncho[0].name}</ModalHeader>
          <img style={{maxHeight: '700px', maxWidth: 'auto'}}src={ponchoListState.clickedPoncho[0].image} alt="" />
          <ModalBody>
            <ModalForm ponchoData={ponchoListState.clickedPoncho[0]} toggleState={this.props.toggleState} />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
  }
}

export default PonchoModal
