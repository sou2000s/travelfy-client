import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="card w-72 md:w-96 text-black bg-[#b2f1cd] ">
  <div className="card-body">
  <h1>{review.tourName}</h1>
    <img src={review.customerImage} className="w-10" alt={review.customerName} />
    <p className="card-title">Name: <small>{review.customerName}</small></p>
    <p>Review: {review.text}</p>
    <div className="avatar">
  <div className="w-8 rounded">
  </div>
</div>
  </div>
</div>
    );
};

export default ReviewCard;