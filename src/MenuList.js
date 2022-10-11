import React from "react";
import Order from "./Order";
import "./App.css";

const MenuList = ({ menuItems, setOrder, order }) => {
  return (
    <div className="menuOptions">
      {menuItems.map((menuItem) => (
        <div style={{ width: "300px", height: "auto", margin: "5px" }}>
          <img src={menuItem.img} style={{ maxHeight: "200px" }} alt="" />
          <p>{menuItem.food}</p>
          <p>{menuItem.price}</p>
          <button
            onClick={() => {
              setOrder([...order, menuItem]);
              console.log("menu", menuItem);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
