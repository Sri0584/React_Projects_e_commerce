import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Chef.css";

const Chef = () => (
  <div className="app__wrapper  app__bg section__padding">
    <div className="chef-image">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef-content ">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__wrapper_info ">
        <div className="quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="sign">
          <p> Kevin Luo</p>
          <p className="p__opensans">Chef & founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
