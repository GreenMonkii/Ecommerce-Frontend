import React, { useEffect, useState } from "react";
import { getProductById } from "../data/client";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSwiper from "../components/Swiper";
import { average, range } from "../constants/constants";
import { addToCart } from "../data/client";
import { getItem } from "../utils/local-storage";
import { Alert } from "reactstrap";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  let params = useParams();
  const token = getItem("token");

  const handleAddToCart = () => {
    addToCart(product?._id, quantity, token)
      .then(() => {
        setSuccess(true);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      })
      .catch(() => {
        setSuccess(false);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      });
  };

  useEffect(() => {
    getProductById(params.productId).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [params.productId]);
  return (
    !loading && (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{ paddingTop: 12, paddingBottom: 12 }}
            >
              <div className="simple-slider">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <ImageSwiper image={product.Image} />
                  </div>
                  <div className="swiper-pagination" />
                  <div
                    className="swiper-button-prev"
                    style={{ color: "var(--bs-body-color)" }}
                  />
                  <div
                    className="swiper-button-next"
                    style={{ color: "var(--bs-body-color)" }}
                  />
                </div>
              </div>
            </div>
            <div className="col" style={{ width: "auto" }}>
              <h1>
                <strong>
                  <span style={{ color: "rgb(160, 55, 62)" }}>
                    {product.Name}
                  </span>
                </strong>
              </h1>
              <div
                style={{
                  height: "auto",
                  width: "auto",
                  display: "inline",
                  marginLeft: 10,
                }}
              >
                {range(average(product.Ratings)).map((_, key) => (
                  <i
                    className="fas fa-star"
                    style={{ color: "#FFD700" }}
                    key={key}
                  />
                ))}
              </div>
              <span
                style={{ marginLeft: 25 }}
              >{`(${product.Ratings.length} Customer Rating)`}</span>
              <strong
                style={{
                  display: "block",
                  marginLeft: 12,
                  fontSize: 20,
                  paddingTop: 10,
                }}
              >
                <span style={{ color: "rgb(160, 55, 62)" }}>
                  ${product.Price}
                </span>
              </strong>
              <hr />
              <p>
                <br />
                <span
                  style={{
                    color: "rgb(123, 136, 152)",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                  }}
                >
                  {product.Description}
                </span>
              </p>
              <hr />
              <input
                type="number"
                className="form-control d-inline"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: "auto" }}
                min={1}
                max={product.Stock}
                step={1}
                placeholder={1}
              />
              <button
                className="btn btn-dark"
                type="button"
                style={{
                  height: 40,
                  paddingBottom: 0,
                  paddingTop: 0,
                  width: 200,
                  marginLeft: 35,
                }}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <Alert
                style={{ position: "fixed", top: 0, right: 0, zIndex: 9999 }}
                color={success ? "success" : "danger"}
                isOpen={alert}
                toggle={() => setAlert(false)}
              >
                {success
                  ? "Item has been added to cart!"
                  : "An error occured while adding item to cart!"}
              </Alert>
            </div>
          </div>
        </div>

        <div className="container py-4 py-xl-5" style={{ marginTop: "14.5px" }}>
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>
                <span style={{ color: "rgb(160, 55, 62)" }}>Reviews</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <div className="col">
              <div>
                <p className="bg-body-tertiary border rounded border-0 p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    alt=""
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">
                      <span style={{ color: "rgb(40, 34, 29)" }}>
                        John Smith
                      </span>
                    </p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="bg-body-tertiary border rounded border-0 p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    alt=""
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">
                      <span style={{ color: "rgb(40, 34, 29)" }}>
                        John Smith
                      </span>
                    </p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="bg-body-tertiary border rounded border-0 p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    alt=""
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">
                      <span style={{ color: "rgb(40, 34, 29)" }}>
                        John Smith
                      </span>
                    </p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default Product;
