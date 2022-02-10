import React from "react";
import { data, images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Laurels.css";

const Laurels = () => {
  const AwardCard = ({ title, sub, image }) => {
    return (
      <div className="card ">
        <img src={image} alt={title} />
        <div className="title ">
          <p className="p__cormorant">{title}</p>
          <p className="p__opensans">{sub}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="app__wrapper section__padding app__bg" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">our Laurels</h1>

        <div className="laurels-awards">
          {data.awards.map((award) => {
            return (
              <AwardCard
                key={award.title}
                title={award.title}
                image={award.imgUrl}
                sub={award.subtitle}
              />
            );
          })}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
