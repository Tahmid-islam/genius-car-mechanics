import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://mighty-peak-26119.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h1>Details of: {service.Name}</h1>
      <h1>This is booking: {serviceId}</h1>
      <img src={service.img} alt="" />
    </div>
  );
};

export default Booking;
