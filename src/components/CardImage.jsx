import React from "react";

function CardImage({ title, text, images }) {
  return (
    <div>
      <div className="textoverflow">
        <h5 className="h5">{title} </h5>
        <p>{text}</p>
      </div>
      <img src={images} alt="img" className="imgclass" />
    </div>
  );
}

export default CardImage;
