import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  return (
    <div className="service container pb-3">
      <img className="img-fluid" src={img} alt="" />
      <h2>{name}</h2>
      <h5>Price: {price}</h5>
      <p className="px-3">description:{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-warning rounded">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
