import { getProducts } from "../data/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// A product is a Javascript Object to represent the model that we will create in the backend.
// It consists of the following properties: Name, Price, Description, Image, Retailer, Category, Featured.

const Index = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  const featuredProducts = products.filter((it) => it.featured === true);

  return (
    !loading && (
      <>
        <Navbar />
        <div className="container" style={{ height: "auto", borderRadius: 10 }}>
          <section className="py-4 py-xl-5">
            <div className="container">
              <div className="bg-dark border rounded overflow-hidden">
                <div className="row g-0" style={{ background: "#f3ebdc" }}>
                  <div className="col-md-6">
                    <div className="text-white p-4 p-md-5">
                      <h2 className="fw-bold mb-3" style={{ color: "#747C6D" }}>
                        Wireless
                      </h2>
                      <h2
                        className="fw-bold mb-3"
                        style={{ fontSize: "2.5em", color: "#A0373E" }}
                      >
                        EARPHONES
                      </h2>
                      <p className="mb-4" style={{ color: "#747C6D" }}>
                        Get The Best Wireless Music Experience with Our Premium
                        Earphones
                      </p>
                      <div className="my-3">
                        <Link
                          to={`/products/${featuredProducts[0]._id}`}
                          preventScrollReset={true}
                        >
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              background: "#A0373E",
                              borderRadius: "3%",
                            }}
                          >
                            VIEW MORE
                          </button>
                        </Link>
                        <button
                          className="btn btn-secondary"
                          type="button"
                          style={{
                            marginLeft: 26,
                            marginRight: 0,
                            color: "#747C6D",
                            borderRadius: "3%",
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 order-first order-md-last"
                    style={{ minHeight: 250 }}
                  >
                    <img
                      className="d-flex fit-cover img-fluid banner-image"
                      src={`${process.env.REACT_APP_API_URL}/img/${featuredProducts[0].Image[0]}`}
                      alt="Header"
                      width={456}
                      height={369}
                      style={{ zoom: 2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>
                <span style={{ color: "rgb(160, 55, 62)" }}>
                  BEST SELLER PRODUCTS
                </span>
              </h2>
              <p className="w-lg-50">
                <span style={{ color: "rgb(116, 124, 109)" }}>
                  Check Out Our Best Selling Products. Who knows, you may find
                  something you like.
                </span>
              </p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {products
              .filter((it) => it.featured === false)
              .map((product, key) => {
                return (
                  <Link
                    to={`/products/${product._id}`}
                    preventScrollReset={true}
                    key={key}
                  >
                    <div className="col">
                      <div className="card">
                        <img
                          className="card-img-top w-100 d-block fit-cover"
                          src={`${process.env.REACT_APP_API_URL}/img/${product.Image[0]}`}
                          alt=""
                        />
                        <div className="card-body p-4">
                          <p className="text-primary card-text mb-0">
                            ${product.price}
                          </p>

                          <h4 className="card-title">
                            <span style={{ color: "rgb(160, 55, 62)" }}>
                              {product.name}
                            </span>
                          </h4>
                          <p className="card-text">{product.description}</p>
                          <div className="d-flex">
                            <img
                              className="rounded-circle flex-shrink-0 me-3 fit-cover"
                              width={50}
                              height={50}
                              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                              alt=""
                            />
                            <div>
                              <p className="fw-bold mb-0">
                                {product.retailer.name}
                              </p>
                              <p className="text-muted mb-0">
                                {product.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="py-4 py-xl-5">
                <div className="container">
                  <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
                    <div className="row g-0" style={{ background: "#dccbb3" }}>
                      <div className="col-md-6 align-self-center">
                        <div
                          className="text-white p-4 p-md-5"
                          data-bss-disabled-mobile="true"
                          data-aos="fade-right"
                          data-aos-duration={1000}
                          data-aos-once="true"
                        >
                          <h2
                            className="fw-bold mb-3"
                            style={{ color: "#28221d" }}
                          >
                            HOTTEST DEAL
                          </h2>
                          <p className="mb-4">
                            <span style={{ color: "rgb(40, 34, 29)" }}>
                              Grab A Pair of One of the Classiest Oraimo Airpods
                              You Could Get Now on Our Store
                            </span>
                          </p>
                          <div
                            className="my-3"
                            style={{ textAlign: "left", overflow: "visible" }}
                          >
                            <a
                              className="btn btn-light btn-lg"
                              role="button"
                              href="/"
                              style={{
                                borderRadius: 10,
                                height: "auto",
                                paddingTop: 16,
                                paddingBottom: 16,
                                width: "40%",
                                margin: 0,
                                marginBottom: 0,
                                marginRight: 0,
                                paddingRight: 16,
                                paddingLeft: 16,
                              }}
                            >
                              <span style={{ color: "rgb(40, 34, 29)" }}>
                                CHECK IT OUT
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 order-first order-md-last"
                        style={{ minHeight: 250 }}
                      >
                        <img
                          className="w-100 h-100 fit-cover"
                          src={`${process.env.REACT_APP_API_URL}/img/oraimo.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Index;