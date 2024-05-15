import { useEffect, useState } from "react";
import { getProducts } from "../data/client";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({});

  useEffect(() => {
    getProducts(query).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleGo = () => setQuery({ ...query, search: inputValue });

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuery({ ...query, search: inputValue });
    }
  };

  const handleSort = (e) => {
    setQuery({ ...query, search: inputValue, sortBy: e.target.innerText });
  };

  return (
    !loading && (
      <>
        <Navbar />
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <div className="input-group" style={{ paddingTop: 0 }}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search products"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleEnter}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#A0373E", borderRadius: "3%" }}
                  onClick={handleGo}
                >
                  go
                </button>
              </div>
            </div>
          </div>
          <div
            className="dropend"
            style={{
              margin: "12.5px 0px",
              background: "var(--bs-btn-disabled-color)",
            }}
          >
            <button
              className="btn btn-primary dropdown-toggle"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
              style={{
                background: "var(--bs-body-bg)",
                color: "#A0373E",
                fontSize: 16,
              }}
            >
              SORT BY&nbsp;
            </button>
            <div className="dropdown-menu">
              <span className="dropdown-item" onClick={handleSort}>
                Price
              </span>
              <span className="dropdown-item" onClick={handleSort}>
                Ratings
              </span>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {products.map((product, key) => (
              <ProductCard product={product} key={key} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
