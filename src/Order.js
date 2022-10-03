import React from "react";

const Order = ({ order }) => {
  console.log("order", order);
  let totalPrice = order.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);

  return (
    <div>
      {order.map((ord) => (
        <p>
          {ord.food} Price: ${ord.price}.00
        </p>
      ))}
      <p> ${totalPrice}.00</p>
    </div>
  );
};

export default Order;
