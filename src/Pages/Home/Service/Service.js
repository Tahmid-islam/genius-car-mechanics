import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h5>Price: {price}</h5>
      <p className="px-3">description:{description}</p>
    </div>
  );
};

export default Service;
