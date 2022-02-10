import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="about-container section__padding app__bg flex__center "
      id="about"
    >
      <div className="about-image flex__center ">
        <img src={images.G} alt="g_overlay" />
      </div>
      <div className="flex__center about_content">
        <div className="about-us-content">
          <h1 className="headtext__cormorant">About us</h1>
          <img
            src={images.spoon}
            alt="spoon"
            style={{ marginRight: "0.2rem" }}
            className="spoon__img"
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro
            amet fugit natus tempore doloremque.
          </p>
          <button className="custom__button" type="button">
            know more
          </button>
        </div>
        <div className="knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="history ">
          <h1 className="headtext__cormorant">Our History</h1>
          <img
            src={images.spoon}
            alt="spoon"
            style={{ marginLeft: "0.2rem" }}
            className="spoon__img"
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro
            amet fugit natus tempore doloremque.
          </p>
          <button className="custom__button" type="button">
            know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
