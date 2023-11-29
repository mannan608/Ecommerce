import React from "react";

const Rating = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        {stars >= index + 1 ? (
          <i class="fa-solid fa-star"></i>
        ) : stars >= number ? (
          <i class="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i class="fa-regular fa-star"></i>
        )}
      </div>
    );
  });

  return (
    <div className="d-flex gap-5">
      <p className="d-flex gap-2 txt-warning">{ratingStar}</p>
      <p>Customer Review {review}</p>
    </div>
  );
};

export default Rating;
