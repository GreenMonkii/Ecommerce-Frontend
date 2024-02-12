import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./routes/About";
import Product from "./routes/Product";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/404";
import Index from "./routes/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
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
reportWebVitals();
