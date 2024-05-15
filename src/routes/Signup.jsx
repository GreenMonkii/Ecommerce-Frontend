import React, { useState } from "react";
import { createUser } from "../auth/auth";
import Navbar from "../components/Navbar";
import { setItem } from "../utils/local-storage";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../hooks/token";

const Signup = (props) => {
  const { isValid } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const redirectTo = "/login";

  if (isValid) {
    navigate("/")
    return null;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      createUser(email, password, (token) => {
        setItem("token", token);
        navigate(redirectTo);
      });
    } catch (error) {
      console.error("Error signing up: ", error);
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
          <button type="submit" className="btn btn-dark" onClick={handleSignup}>
            Sign up
          </button>
        </form>
        <div className="mt-3">
          <Link to="/login" className="btn btn-link">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
