import React from "react";

const Card = ({ image, name, position, biography }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} style={{ width: "10%" }} />
        <div className="container">
          <h4>{name}</h4>
          <p>{position}</p>
          <p>{biography}</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(Card);
