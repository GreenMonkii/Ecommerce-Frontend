import { useState } from "react";
import StarRatings from "react-star-ratings";
import { addReview } from "../data/client";
import { getItem } from "../utils/local-storage";

const ReviewForm = ({ products }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const token = getItem("token");

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      addReview(selectedProduct, rating, comment, token)
        .then(() => {
          setRating(0);
          setComment("");
          setSelectedProduct("");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "20px", margin: "20px" }}
    >
      <form onSubmit={handleSubmit} className="w-100 w-md-50">
        <div className="mb-3 d-flex flex-column flex-md-row">
          <label htmlFor="productSelect" className="form-label me-3">
            Select Product:
          </label>
          <select
            id="productSelect"
            className="form-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {products?.map((product, index) => (
              <option key={index} value={product._id}>
                {product.Name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-column flex-md-row">
          <label className="form-label me-3">Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label className="form-label me-3">Rating:</label>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            changeRating={setRating}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
