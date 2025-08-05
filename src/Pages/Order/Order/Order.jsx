import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import coverimg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import Ordertabs from "../../Order/Ordertabs/Ordertabs";
import { Helmet } from "react-helmet-async";
const Order = () => {
  // 🛠 Fixed spacing/case to match real categories
  const categories = ["salad", "soup", "pizza", "drinks", "dessert"];

  const { category } = useParams();
  
  // Fix index and fallback if not found
  const initialIndex = categories.indexOf(category?.toLowerCase());
  const [tabIndex, setTabIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  const [menu] = UseMenu();

  // Filter menu based on categories
  const filteredItems = {
    salad: menu.filter((item) => item.category === "salad"),
    soup: menu.filter((item) => item.category === "soup"),
    pizza: menu.filter((item) => item.category === "pizza"),
    drinks: menu.filter((item) => item.category === "drinks"),
    dessert: menu.filter((item) => item.category === "dessert"),
  };

  return (
    <div>
        <Helmet>
                <title>Bistro Boss | Order Food</title>
              </Helmet>
      <Cover img={coverimg} title="Order Food" />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {categories.map((cat, index) => (
            <Tab key={index}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Tab>
          ))}
        </TabList>

        {categories.map((cat, index) => (
          <TabPanel key={index}>
            <Ordertabs items={filteredItems[cat]} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;
