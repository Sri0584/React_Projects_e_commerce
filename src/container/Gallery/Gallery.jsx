import React, { useRef } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className=" gallery-container flex__center section__padding">
      <div className="gallery-info">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ marginTop: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="submit" className="custom__button">
          View More
        </button>
      </div>
      <div className="gallery-flex ">
        <div className="images-container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => {
            return (
              <div
                className="images-card flex__center"
                key={`gallery-image-${index + 1}`}
              >
                <img src={image} alt="gallery " />
                <BsInstagram className="instagram flex__center" />
              </div>
            );
          })}
        </div>
        <div className="arrows">
          <BsArrowLeftShort
            className="arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
