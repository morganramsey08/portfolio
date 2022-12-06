import React from "react";
import classnames from "classnames";
import arrow from "../../img/hand-drawn-arrow.svg";
import "./index.scss";

interface noteProps {
  red: boolean;
  noteCopy: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  rotate: string;
  rotateArrow: string;
}

const PostItNote = ({
  red,
  noteCopy,
  top,
  right,
  bottom,
  left,
  rotate,
  rotateArrow,
}: noteProps) => {
  return (
    <div
      className={classnames("post-it-note", {
        red: red,
      })}
      style={{
        top: `${top}`,
        right: `${right}`,
        bottom: `${bottom}`,
        left: `${left}`,
        rotate: `${rotate}`,
      }}
    >
      <img
        src={arrow}
        style={{ rotate: `${rotateArrow}` }}
        alt="Check out this css"
      />
      {noteCopy}
    </div>
  );
};

export default PostItNote;
