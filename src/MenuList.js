import React from "react";
import Order from "./Order";

const MenuList = ({ menuItems, setOrder, order }) => {
  return (
    <div>
      {menuItems.map((menuItem) => (
        <>
          <div>
            <img src={menuItem.img} style={{ maxHeight: "200px" }} alt="" />
          </div>

          <div>{menuItem.food}</div>
          <div>{menuItem.price}</div>
          <div>
            <button
              onClick={() => {
                setOrder([...order, menuItem]);
                console.log("menu", menuItem);
              }}
            >
              Add to Cart
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default MenuList;
