import React, { Fragment } from "react";
import Review from "./Review";
import { UncontrolledCollapse } from "reactstrap";

const ReviewList = ({ name, reviews, index }) => {
  return (
    <div className="row">
      <button
        id={`toggler-${index}`}
        className="btn bg-body-tertiary justify-content-between"
        style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}
      >
        <span style={{ marginRight: "auto" }}>{name}</span>
        <i className="bi bi-arrows-expand" style={{ marginLeft: "auto" }} />
      </button>

      <UncontrolledCollapse toggler={`#toggler-${index}`}>
        {reviews.map((review, index) => (
          <Fragment key={review._id}>
            <Review review={review} />
            {index !== reviews.length - 1 && <hr />}
          </Fragment>
        ))}
      </UncontrolledCollapse>
    </div>
  );
};

export default ReviewList;
