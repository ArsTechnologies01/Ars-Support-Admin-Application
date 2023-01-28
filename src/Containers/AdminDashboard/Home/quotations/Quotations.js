import React from "react";
import SingleQuotation from "../../../../Components/SingleItem/SingleQuotation";

import quatation from "./quatation.module.css";

const Quotations = () => {
  const data = [
    {
      productInfo: "info 1",
      phoneNumber: 1234567890,
      vailableStock: 5,
    },
    {
      productInfo: "info 1",
      phoneNumber: 1234567890,
      vailableStock: 5,
    },
    {
      productInfo: "info 1",
      phoneNumber: 1234567890,
      vailableStock: 5,
    },
    {
      productInfo: "info 1",
      phoneNumber: 1234567890,
      vailableStock: 5,
    },
    {
      productInfo: "info 1",
      phoneNumber: 1234567890,
      vailableStock: 5,
    },
  ];
  return (
    <div className={quatation.Container}>
      <h2>Quotation Received</h2>
      <div className={quatation.quatationSection}>
        {data?.map((d, key) => (
          <SingleQuotation data={d} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Quotations;
