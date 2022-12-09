import React from "react";
import classnames from "classnames";
import "./index.scss";

interface noteProps {
  alignItems?: string;
  red?: boolean;
  noteCopy?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  reverseArrow?: boolean;
  rotate?: string;
  rotateArrow?: string;
  whiteArrow?: boolean;
}

const PostItNote = ({
  alignItems,
  red,
  noteCopy,
  top,
  right,
  bottom,
  left,
  reverseArrow,
  rotate,
  rotateArrow,
  whiteArrow,
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
        alignItems: `${alignItems}`,
      }}
    >
      <svg
        className={classnames({
          reverseArrow: reverseArrow,
          whiteArrow: whiteArrow,
        })}
        style={{ rotate: `${rotateArrow}` }}
        width="51"
        height="71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.268 20.468c17.762.718 52.246 11.637 48.085 49.57M1.268 20.467L24 1.5M1.268 20.468l9.32 29.445"
          stroke="red"
          strokeOpacity=".47"
          strokeWidth="2"
        />
      </svg>
      {noteCopy}
    </div>
  );
};

export default PostItNote;
