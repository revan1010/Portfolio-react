import React from "react";
import "./Services.css";
import { HiChevronDoubleDown } from "react-icons/hi2";
import ServiceItem from "./ServiceItem";
export const Services = ({ data }) => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>
          MY SERVICES
          <strong>
            <HiChevronDoubleDown />
          </strong>
        </h1>
      </div>
      <div className="services-list">
        {data.services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};
