import React from 'react';

const KeyFocusCards = ({heading , text , icon}) => {
    return (
        <div>
             <div className="card w-96 bg-base-100  shadow-xl">
  <div className="card-body">
   <img src={icon} className="w-14" alt="" />
    <h2 className="card-title">{heading}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};

export default KeyFocusCards;