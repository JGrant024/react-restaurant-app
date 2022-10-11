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
      description: "testing ",
    },

    {
      category: "food",
      food: "WAFFLES && FRUIT",
      price: 11,
      img: "https://images.unsplash.com/photo-1605209679572-3ddac6d8ae5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "",
    },
    {
      category: "food",
      food: "BACON && EGGS",
      price: 11,
      img: "https://media.istockphoto.com/photos/smiling-and-positive-face-made-from-fried-eggs-and-bacon-on-plate-picture-id919919376?b=1&k=20&m=919919376&s=170667a&w=0&h=c0DVqemFs0aWWX7sRRrled1nwYrrTYvpA0ZMbQ3Bh78=",
      description: "",
    },

    {
      category: "food",
      food: "LEMON POUND CAKE FRENCH TOAST SKEWERS",
      price: 15,
      img: "https://www.homemadeinterest.com/wp-content/uploads/2017/03/Lemon-Pound-Cake-French-Toast_HMI-featured.jpg",
      description: "",
    },

    {
      category: "BEVERAGES",
      food: "STRAWBERRY SUNRISE MIMOSA",
      price: 8,
      img: "https://bakerbynature.com/wp-content/uploads/2022/04/Strawberry-Mimosas-0-15.jpg",
      description: "",
    },

    {
      category: "BEVERAGES",
      food: "RAGING RASPBERRY",
      price: 8,
      img: "https://www.midgetmomma.com/wp-content/uploads/2021/04/Raspberry-Mimosas-22.jpg",
      description: "testx",
    },

    {
      category: "BEVERAGES",
      food: "HAWAIIAN MIMOSA",
      price: 8,
      img: "https://www.sugarandsoul.co/wp-content/uploads/2021/04/tiktok-hawaiian-mimosa-recipe-11.jpg",
      description: "",
    },
  ]);

  const [order, setOrder] = useState([]);

  return (
    <div>
      <MenuList
        menuItems={menuItems}
        setOrder={setOrder}
        setMenuItems={setMenuItems}
        order={order}
      />
      <Order order={order} menuItems={menuItems} setMenuItems={setMenuItems} />
    </div>
  );
};
export default Menu;
