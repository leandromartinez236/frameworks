import React from "react";


import './card.css'
const Card = ({tittle, image, text, url}) => {
  return (
    <div className="card text-center bg-dark mb-4">
      <img src={image} alt="" />
      <div className="card-body text-light">
        <h4 className="card-tittle">{tittle}</h4>
        <p className="card-text">
          {text}
        </p>
        <a href={url} className="btn btn-outline-secondary border-0" target='_blank'>
          Ver la Web
        </a>
      </div>
    </div>
  );
};

export default Card;
