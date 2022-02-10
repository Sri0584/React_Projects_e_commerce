import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prevVal) => !prevVal);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app_video section__padding">
      <video
        src={meal}
        type="video/mp4"
        muted
        loop
        controls={false}
        ref={vidRef}
      />
      <div className="video-overlay flex__center">
        <div className="circle flex__center" onClick={handleVideo}>
          {playVideo ? <BsFillPlayFill /> : <BsPauseFill />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
