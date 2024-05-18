import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./routes/About";
import Product from "./routes/Product";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error404Page, ServerErrorPage } from "./routes/404";
import Index from "./routes/Index";
import Products from "./routes/Products";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error404Page />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ServerErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ServerErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ServerErrorPage />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
    errorElement: <ServerErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
