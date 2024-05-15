import React from "react";
import { Modal, ModalBody } from "reactstrap";

const Notifications = ({ isSuccess, message, isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalBody
        className={`notification ${isSuccess ? "success" : "failure"}`}
      >
        {message}
      </ModalBody>
    </Modal>
  );
};

export default Notifications;
