import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function modals(props) {
function toggleModal(){
    sethideModal(!hideModal);
}


const [hideModal , sethideModal] = useState(false);

  return (
    <React.Fragment>
    <Button color="danger" onClick={toggleModal}>show Modal Button</Button>
    <Modal isOpen={hideModal} toggle={toggleModal} className="hello">
      <ModalHeader toggle={toggleModal} charCode="Y"></ModalHeader>
      <ModalBody>
      {props.children}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </React.Fragment>
  )
}
