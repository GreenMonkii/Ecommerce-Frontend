import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../routes/Cart";
import { getCartItems } from "../data/client";
import Logo from "../assets/img/logo.png";
import useToken from "../hooks/token";

const Navbar = () => {
  const { token, isValid } = useToken();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login", { redirect: "/" });
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (isOpen && isValid) {
          const res = await getCartItems(token);
          console.log(res);
          setCart(res);
        } else if (isOpen && !isValid) {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCartItems();
  }, [isOpen, isValid, navigate, token]);

  const routes = [
    { name: "Products", path: "products" },
    { name: "About Us", path: "about" },
    { name: "Reviews", path: "reviews" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`} style={{ color: "#A0373E" }}>
            <img
              src={Logo}
              alt="logo"
              height="75"
              style={{ maxWidth: "100%" }}
            />
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item" />
            </ul>
            {routes.map(({ name, path }, key) => {
              return (
                <Link
                  to={`/${path}`}
                  style={{ fontSize: 16, marginLeft: 20 }}
                  key={key}
                >
                  <span style={{ fontWeight: "lighter !important" }}>
                    {name.toUpperCase()}
                  </span>
                </Link>
              );
            })}
            {isValid ? (
              <button
                className="btn btn-dark ms-auto"
                type="button"
                style={{ textAlign: "left" }}
                onClick={toggle}
              >
                VIEW CART
              </button>
            ) : (
              <button
                className="btn btn-dark ms-auto"
                type="button"
                style={{ textAlign: "left" }}
                onClick={redirectToLogin}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </nav>
      <Cart isOpen={isOpen} toggle={toggle} items={cart} />
    </>
  );
};

export default Navbar;
