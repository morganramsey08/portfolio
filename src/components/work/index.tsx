import React from "react";
import PostItNote from "../note/index.tsx";
import { Portfolio } from "./data.js";
import "./index.scss";

const PortfolioWork = () => {
  return (
    <div className="portfolio-component" id="work">
      <div className="header">
        <div className="header-wrap">
          <h2>Work</h2>
          <span className="subtitle">
            focusing on usability and intuitiveness
          </span>
        </div>
        <div className="code-cta">
          <PostItNote
            alignItems="flex-end"
            red
            noteCopy="if you want to see the code"
            left="54px"
            bottom="122px"
            rotate="16deg"
            rotateArrow="30deg"
            reverseArrow
          />
          <a
            href="https://github.com/morganramsey08/portfolio"
            className="button primary"
          >
            Check this site out on GitHub
          </a>
        </div>
      </div>

      <div className="portfolio-container">
        {Portfolio.map((item) => {
          return (
            <div className="port-item" key={item.id}>
              <div>
                <span className="title">{item.Name}</span>
                <span className="description">{item.Description}</span>
                <div className="tags">
                  {item.Tags.map((tag, index) => {
                    return (
                      <span className="tag" key={index}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <a href={item.Behance} className="behance-link">
                  View on Behance
                </a>
              </div>
              <div className="port-image"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioWork;
