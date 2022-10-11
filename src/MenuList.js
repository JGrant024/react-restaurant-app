import React from "react";
import uuid from "react-uuid"; //generates new key ids
import Button from "react-bootstrap/Button";
import "./App.css";

const MenuList = ({ menuItems, setOrder, order }) => {
  return (
    <div className="menuOptions">
      {menuItems.map((menuItem) => (
        <div
          key={uuid()} //the key to generate new ids
          style={{ width: "300px", height: "auto", margin: "5px" }}
        >
          <img src={menuItem.img} style={{ maxHeight: "200px" }} alt="" />
          <p>{menuItem.food}</p>
          <p>{menuItem.price}</p>
          <p>{menuItem.description}</p>
          <Button
            variant="dark"
            onClick={() => {
              setOrder([...order, menuItem]);
              console.log("menu", menuItem);
            }}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
