import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const Cart = ({ isOpen, toggle, items }) => {
  return (
    <Offcanvas
      isOpen={isOpen}
      toggle={toggle}
      backdrop={true}
      direction="end"
      scrollable={true}
    >
      <OffcanvasHeader toggle={toggle}>Shopping Cart</OffcanvasHeader>
      <OffcanvasBody>
        {items.map((entry, index) => (
          <div key={index} className="bg-body-tertiary p-2 mb-2 rounded">
            <h5>{entry.product.Name}</h5>
            <p>Price: ${entry.product.Price}</p>
            <p>Quantity: {entry.quantity}</p>
          </div>
        ))}
        <button className="btn btn-dark mt-3">Checkout</button>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Cart;
