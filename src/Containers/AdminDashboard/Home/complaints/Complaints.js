import SingleComplain from "../../../../Components/SingleItem/SingleComplain";

import com from "./complaints.module.css";

const Complaints = () => {
  const data = [
    {
      complaintsNumber: 1,
      phoneNumber: 1234567890,
      productInfo: "test product 1",
      message: "test message 1",
    },
    {
      complaintsNumber: 2,
      phoneNumber: 1234567890,
      productInfo: "test product 2",
      message: "test message 2",
    },
    {
      complaintsNumber: 3,
      phoneNumber: 1234567890,
      productInfo: "test product 3",
      message: "test message 3",
    },
    {
      complaintsNumber: 4,
      phoneNumber: 1234567890,
      productInfo: "test product 4",
      message: "test message 4",
    },
    {
      complaintsNumber: 5,
      phoneNumber: 1234567890,
      productInfo: "test product 5",
      message: "test message 5",
    },
    {
      complaintsNumber: 5,
      phoneNumber: 1234567890,
      productInfo: "test product 5",
      message: "test message 5",
    },
  ];
  return (
    <div className={com.Container}>
      <h1>Complaints Received</h1>
      <div className={com.complaintSection}>
        {data?.map((d, key) => (
          <SingleComplain data={d} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Complaints;
