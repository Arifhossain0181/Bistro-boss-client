import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import menuimgs from "../../assets/menu/dessert-bg.jpeg";
import Pizzaimg from "../../assets/menu/pizza-bg.jpg";
import souPimg from "../../assets/menu/soup-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import UseMenu from "../../../src/Hooks/UseMenu";
import SectionTilte from "../../ComPonent/SectionTitle/SectionTilte";
import Menucategori from "./Menucataegori/Menucategori";
const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const souP = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offers = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="our menu"></Cover>
      {/** main cover */}
      <SectionTilte
        subheading="Dont Miss"
        heading="Todays offers"
      ></SectionTilte>
      {/** offered */}
      <Menucategori items={offers}></Menucategori>
      {/** desserted */}
      <Menucategori
        items={dessert}
        title="dessert"
        coverimg={menuimgs}
      ></Menucategori>
      <Menucategori
        items={pizza}
        title="Pizza"
        coverimg={Pizzaimg}
      ></Menucategori>
      <Menucategori
        items={souP}
        title="souP "
        coverimg={souPimg}
      ></Menucategori>
      <Menucategori
        items={salad}
        title="salad"
        coverimg={saladimg}
      ></Menucategori>
    </div>
  );
};

export default Menu;
