import React, { useState } from "react";
import MenuList from "./MenuList";
import Order from "./Order";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      category: "food",
      food: "CHICKEN && WAFFLES",
      price: 12,
      img: "https://t4.ftcdn.net/jpg/01/90/57/59/360_F_190575923_B5GhewYRdKlLpQAQ7CRyxseMZuy2ps4r.jpg",
      description:
        " St. agur blue cheese cheeseburger mozzarella. Stinking bishop halloumi danish fontina cauliflower cheese fondue emmental ricotta cheesy grin. ",
    },

    {
      category: "food",
      food: "SHRIMP && GRITS",
      price: 13,
      img: "https://garrysgrill.com/wp-content/uploads/2017/07/Shrimp-and-grit.png",
      description:
        "Roquefort cheese slices emmental. Stilton monterey jack melted cheese lancashire dolcelatte smelly cheese bocconcini bocconcini. Taleggio who moved my cheese caerphilly feta brie paneer emmental croque monsieur. Manchego mozzarella cheddar halloumi fromage cheese strings st. agur blue cheese",
    },

    {
      category: "food",
      food: "WAFFLES && FRUIT",
      price: 11,
      img: "https://media.istockphoto.com/photos/fresh-homemade-heart-shape-waffles-with-blueberries-and-strawberry-on-picture-id641818546?k=20&m=641818546&s=612x612&w=0&h=wdVO6mXa2zZ9npWkMSBHvkKkHPM3a8wF_g5_ENO5HGo=",
      description:
        "Hard cheese cauliflower cheese cheese strings. Red leicester roquefort taleggio pecorino swiss babybel roquefort camembert de normandie.",
    },
    {
      category: "food",
      food: "BACON && EGGS",
      price: 11,
      img: "https://media.istockphoto.com/photos/close-up-of-2-sunny-side-up-style-eggs-and-bacon-on-a-plate-picture-id468341234?k=20&m=468341234&s=612x612&w=0&h=_yYKfOr0KAap-meV36i9f87A8uxsWBAF2M0eocZ40f8=",
      description:
        "Strip steak corned beef boudin, kielbasa cupim tail prosciutto frankfurter ball tip pig tri-tip turducken swine meatloaf.",
    },

    {
      category: "food",
      food: "LEMON POUND CAKE FRENCH TOAST SKEWERS",
      price: 15,
      img: "https://www.homemadeinterest.com/wp-content/uploads/2017/03/Lemon-Pound-Cake-French-Toast_HMI-featured.jpg",
      description:
        "Cheesecake dessert bear claw sugar plum halvah tiramisu. Dessert sugar plum caramels gummies muffin macaroon macaroon cupcake toffee. Lollipop fruitcake toffee sesame snaps carrot cake apple pie. Tart cupcake cheesecake chocolate halvah.",
    },

    {
      category: "BEVERAGES",
      food: "STRAWBERRY SUNRISE MIMOSA",
      price: 8,
      img: "https://bakerbynature.com/wp-content/uploads/2022/04/Strawberry-Mimosas-0-15.jpg",
      description:
        "Manhattan irish coffee b & b bombay. Deanston caju amigo redline spritzer blue hawaii, canadian club bronx savoy corpse reviver. Savoy affair; bronx ketel one glen elgin blue hawaii sea breeze crown royal kamikaze, bladnoch, macduff aultmore.",
    },

    {
      category: "BEVERAGES",
      food: "RAGING RASPBERRY",
      price: 8,
      img: "https://www.midgetmomma.com/wp-content/uploads/2021/04/Raspberry-Mimosas-22.jpg",
      description:
        "Cutty sark scots whisky van winkle family reserve zombie, springbank lime rickey, widow’s cork. Glen scotia redline godfather bowmore bull shot aberlour gummy and coke snowball aberfeldy harvey wallbange",
    },

    {
      category: "BEVERAGES",
      food: "HAWAIIAN MIMOSA",
      price: 8,
      img: "https://www.sugarandsoul.co/wp-content/uploads/2021/04/tiktok-hawaiian-mimosa-recipe-11.jpg",
      description:
        "Bloody mary glogg the blenheim saketini ectoplasm dom chivas regal. Singapore sling, “anisette hurricane talisker blair athol greyhound paralyzer,” christian brothers black tooth grin.",
    },
  ]);

  const [order, setOrder] = useState([]);

  const submitOrder = () => {
    const submittedOrders =
      JSON.parse(localStorage.getItem("marvelousMunchies")) || [];
    submittedOrders.push({
      name: "Jonathan Grant",
      phoneNumber: "555-555-5555",
      order,
    });
    localStorage.setItem("marvelousMunchies", JSON.stringify(submittedOrders));
    setOrder([]);
  };

  return (
    <div>
      <MenuList
        menuItems={menuItems}
        setOrder={setOrder}
        setMenuItems={setMenuItems}
        order={order}
      />
      <Order order={order} submitOrder={submitOrder} />
    </div>
  );
};
export default Menu;
