import React from "react";
import uuid from "react-uuid";

const Order = ({ order }) => {
  console.log("order", order);
  let totalPrice = order.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  return (
    <div>
      {order.map((ord) => (
        <p key={uuid()}>
          {ord.food} Price: ${ord.price}.00
        </p>
      ))}
      <p> ${totalPrice}.00</p>
    </div>
  );
};

export default Order;
