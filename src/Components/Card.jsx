import React from "react";

const Card = ({name}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://th.bing.com/th/id/OIP.tXvhJOEQRb5WroNB_iWUEQHaFj?pid=ImgDet&rs=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{name || 'King'}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
