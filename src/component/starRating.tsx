import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export const StarRating = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <section>
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </section>
  );
};
