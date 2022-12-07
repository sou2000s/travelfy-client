import React from 'react';
import { Link } from 'react-router-dom';

import { PhotoView } from 'react-photo-view';
const Card = ({tour}) => {
    return (
        <div>
            <div className="card w-72 md:ml-0 ml-6 md:mt-0 mt-7 md:w-96  bg-base-100 shadow-xl hover:scale-110 duration-500 ease-in-out">
  <figure className="px-10 pt-10">
    <img src={tour.image} alt={tour.name} className="rounded-xl w-72   " />
  </figure>
 
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{tour.name}</h2>
    <p>{tour.description?.slice(0 , 83)}</p>
    <p>Price:{tour.price}K</p>
    <div className="card-actions">
      <Link className="btn btn-outline" to={`/tours/${tour._id}`}>Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;