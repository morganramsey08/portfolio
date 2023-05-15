import React from "react";
import PostItNote from "../note/index";
import "./index.scss";

const DownArrow = () => {
  return (
    <div className="down-arrow-component">
      <div className="arrow" />
      <div className="circle" />
      <PostItNote
        red
        noteCopy="inspect that (pure css)"
        left="107px"
        bottom="-30px"
        rotate="-20deg"
        rotateArrow="30deg"
      />
    </div>
  );
};

export default DownArrow;
