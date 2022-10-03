import React from "react";

const Order = ({ order }) => {
  console.log("order", order);
  return (
    <div>
      {order.map((ord) => (
        <p>
          [{ord.food}] {ord.price}
        </p>
      ))}
    </div>
  );
};

export default Order;
