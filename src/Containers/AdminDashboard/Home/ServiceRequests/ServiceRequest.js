import React from "react";
import SingleServiceRequest from "../../../../Components/SingleItem/SingleServiceRequest";

import service from "./serviceRequest.module.css";

const ServiceRequest = () => {
  const data = [
    {
      category: 1,
      phoneNumber: 1234567890,
      brand: "product brand",
      productInfo: "test product 1",
      message: "test message 1",
    },
    {
      category: 2,
      phoneNumber: 1234567890,
      brand: "product brand",
      productInfo: "test product 1",
      message: "test message 1",
    },
    {
      category: 3,
      phoneNumber: 1234567890,
      brand: "product brand",
      productInfo: "test product 1",
      message: "test message 1",
    },
    {
      category: 4,
      phoneNumber: 1234567890,
      brand: "product brand",
      productInfo: "test product 1",
      message: "test message 1",
    },
    {
      category: 5,
      phoneNumber: 1234567890,
      brand: "product brand",
      productInfo: "test product 1",
      message: "test message 1",
    },
  ];
  return (
    <div className={service.Container}>
      <h2>Repair Service Request</h2>
      <div className={service.serviceSection}>
        {data?.map((d, key) => (
          <SingleServiceRequest data={d} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ServiceRequest;
