import React, { useState, useEffect } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Spinner } from "reactstrap";
import { removeFromCart } from "../data/client";
import { getItem } from "../utils/local-storage";
import useToken from "../hooks/token";
import { useNavigate } from "react-router-dom";
import { getCartItems } from "../data/client";

const Cart = ({ isOpen, toggle }) => {
  const { token, isValid } = useToken();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (isOpen && isValid) {
          setLoading(true);
          const res = await getCartItems(token);
          setItems(res);
          setLoading(false);
        } else if (isOpen && !isValid) {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCartItems();
  }, [isOpen, isValid, navigate, token, refresh]);

  const handleRemoveItem = (index) => {
    try {
      const token = getItem("token");
      removeFromCart(items[index]._id, token)
        .then(() => setRefresh(!refresh))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Offcanvas
      isOpen={isOpen}
      toggle={toggle}
      backdrop="static"
      direction="end"
      scrollable={true}
    >
      <OffcanvasHeader toggle={toggle}>Shopping Cart</OffcanvasHeader>
      <OffcanvasBody>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Spinner
              color="primary"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        ) : (
          <>
            {items.map((entry, index) => (
              <div key={index} className="bg-body-tertiary p-3 mb-2 rounded">
                <h5>{entry.product.Name}</h5>
                <p>Price: ${entry.product.Price}</p>
                <p>Quantity: {entry.quantity}</p>
                <button
                  className="btn btn-link"
                  onClick={() => handleRemoveItem(index)}
                  style={{ margin: 0, padding: 0 }}
                >
                  <i
                    className="bi bi-cart-dash-fill text-danger text-lg"
                    style={{ fontSize: "1.5rem" }}
                  />
                </button>
              </div>
            ))}
            {items.length !== 0 ? (
              <button className="btn btn-dark mt-3">Checkout</button>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ height: "100%" }}
                >
                  <i
                    className="bi bi-cart-x-fill text-body-tertiary"
                    style={{ fontSize: "10rem" }}
                  />
                  <div>Your cart is empty!</div>
                </div>
              </div>
            )}
          </>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Cart;
