import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="card p-3" style={{ width: "100%", height: "100%" }}>
      <img
        src={item.image_url}
        style={{ width: 100, height: "auto" }}
        className="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
