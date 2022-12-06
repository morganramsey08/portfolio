import React from "react";
import { Portfolio } from "./data.js";
import "./index.scss";

const PortfolioWork = () => {
  return (
    <div className="portfolio-component">
      <div className="header">
        <div className="header-wrap">
          <h2>Work</h2>
          <span className="subtitle">
            focusing on usability and intuitiveness
          </span>
        </div>
        <div className="code-cta">
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
