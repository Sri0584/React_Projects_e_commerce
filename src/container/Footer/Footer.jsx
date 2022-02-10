import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex__center section__padding footer">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">and never miss updates</p>
      <form className="flex__center">
        <input type="email" name="email" placeholder="Email Address" />
        <button type="submit" className="custom__button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;
