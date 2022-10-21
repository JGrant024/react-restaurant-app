import React, { useState } from "react";
import uuid from "react-uuid";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Order = ({ order, submitOrder }) => {
  console.log("order", order);
  let totalPrice = order.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  return (
    <div>
      {order.map((ord) => (
        <p key={uuid()}>
          x{ord.food} Price: ${ord.price}.00
        </p>
      ))}
      <p> ${totalPrice}.00</p>
      <button type="button" onClick={submitOrder}>
        Submit order
      </button>
    </div>
  );
};

export default Order;
