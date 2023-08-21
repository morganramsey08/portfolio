import React from "react";
import { Portfolio } from "./data.js";
import "./index.scss";

const PortfolioWork = () => {
  return (
    <div className="portfolio-component" id="work">
      <div className="wrapper">
        <div className="header">
          <div className="header-wrap">
            <h2>Work</h2>
            <span className="subtitle">
              Refining usability and intuitiveness.
            </span>
            <hr className="title-bottom-border" />
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
                  <a
                    href={item.Behance}
                    className="behance-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Behance
                  </a>
                </div>
                <div className="port-image">
                  <a
                    href={item.Behance}
                    className="img-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={item.img} alt={item.alt} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioWork;
