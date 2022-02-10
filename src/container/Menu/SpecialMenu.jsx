import React from "react";
import { data, images } from "../../constants";
import MenuItem from "../../components/Menuitem/MenuItem";
import "./SpecialMenu.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const SpecialMenu = () => (
  <div className="special-menu flex__center section__padding" id="menu">
    <div className="menu-heading ">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="menu-content ">
      <div className="menu_left-side flex__center">
        <h3>Wine & Beer</h3>

        {data.wines.map((wine, index) => {
          const { title, price, tags } = wine;
          return (
            <MenuItem key={index} title={title} price={price} tags={tags} />
          );
        })}
      </div>
      <div className="menu-image">
        <img src={images.menu} alt="glass" />
      </div>

      <div className="menu_left-side flex__center">
        <h3>Cocktails</h3>

        {data.cocktails.map((cocktail, index) => {
          const { title, price, tags } = cocktail;
          return (
            <MenuItem key={index} title={title} price={price} tags={tags} />
          );
        })}
      </div>
    </div>
    <button className="custom__button">View more</button>
  </div>
);

export default SpecialMenu;
