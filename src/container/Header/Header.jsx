import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";

const Header = () => {
  return (
    <div className="header app__wrapper section__padding" id="home">
      <div className="left-side">
        <SubHeading title="Chase the new flavor" image={images.spoon} />
        <h1 className="header-title">The key to fine dining</h1>
        <p className="p__cormorant" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          deserunt recusandae eaque tenetur ratione sunt. Magnam, nisi aliquam
          repellat non, blanditiis cum modi laudantium soluta iure adipisci
          cumque! Cumque, fugit!
        </p>
        <button className="custom__button" style={{ width: "150px" }}>
          Explore Now
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-img" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
