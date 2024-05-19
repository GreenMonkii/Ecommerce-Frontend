const Review = ({ review }) => {
  return (
    <figure>
      <blockquote class="blockquote">
        <p>{review.comment}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        {review.author || "Anonymous"}
      </figcaption>
    </figure>
  );
};

export default Review;
