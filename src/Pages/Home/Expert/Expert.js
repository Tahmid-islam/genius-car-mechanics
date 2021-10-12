import React from "react";

const Expert = ({ expert }) => {
  const { img, name, expertize } = expert;
  return (
    <div className="col-xl-3 col-lg-4 col-md-2 col-sm-6 col-12">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{expertize}</h5>
    </div>
  );
};

export default Expert;
