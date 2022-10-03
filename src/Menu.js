import React, { useState } from "react";
import MenuList from "./MenuList";
import Order from "./Order";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      category: "food",
      food: "CHICKEN && WAFFLES",
      price: 12,
      img: "https://images.unsplash.com/photo-1565880112491-e7c4c313850d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        " 3pc Southern Styled season chicken served with fresh fluffy waffles ",
    },

    {
      category: "food",
      food: "SHRIMP && GRITS",
      price: 13,
      img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Cheesy-Cajun-Shrimp-and-Grits_EXPS_TOHDJ20_199562_B08_06_3b.jpg",
      description: "",
    },
  ]);

  const [order, setOrder] = useState([]);

  return (
    <div>
      <MenuList menuItems={menuItems} setOrder={setOrder} order={order} />
      <Order order={order} menuItems={menuItems} />
    </div>
  );
};

export default Menu;
