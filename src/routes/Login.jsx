import React, { useState } from "react";
import { signInUser } from "../auth/auth";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { setItem } from "../utils/local-storage";
import useToken from "../hooks/token";

const Login = (props) => {
  const { isValid } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const redirectTo =
    (props.location && props.location.state && props.location.state.redirect) ||
    "/";

  if (isValid) {
    navigate(redirectTo);
    return null;
  }

  function signInCallback(token) {
    setItem("token", token);
    navigate(redirectTo);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      signInUser(email, password, signInCallback).then((success) => {
        if (!success) {
          console.error("Login failed");
        }
      });
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark" onClick={handleLogin}>
            Log in
          </button>
        </form>
        <div className="mt-3">
          <Link to="/signup" className="btn btn-link">
            Don't have an account? Sign up here.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
