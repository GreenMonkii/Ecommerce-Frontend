import Navbar from "../components/Navbar";
import ReviewList from "../components/ReviewsList";
import { useEffect, useState } from "react";
import { getProducts } from "../data/client";
import ReviewForm from "../components/ReviewForm";

const Reviews = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ perPage: 5 })
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center mt-5">Leave A Review</h3>
        <ReviewForm products={products} />
        <hr />
        {!loading && (
          <div className="container">
            {products.map((product) => (
              <ReviewList
                key={product._id}
                index={product._id}
                reviews={product.Reviews}
                name={product.Name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Reviews;
