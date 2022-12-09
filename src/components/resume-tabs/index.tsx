import React, { useEffect, useRef, useState } from "react";
import { resumeData } from "./data.js";
import "./index.scss";

const ResumeTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="resume-wrapper">
      <div className="resume-nav">
        {resumeData.map((tab, idx) => {
          return (
            <button
              key={idx}
              ref={(el) => (tabsRef.current[idx] = el)}
              className=""
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.Name}
            </button>
          );
        })}
        <span
          className="bottom-border"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="resume-content">
        {resumeData[activeTabIndex].data.map((data, index) => {
          return (
            <div key={index}>
              <div className="job-section">
                <span className="job">{data.job}</span>
                <span className="date">{data.jobDates}</span>
                <span className="title">{data.jobTitle}</span>
                {data.jobTask}
              </div>
              <div className="college-section">
                <span className="college">{data.college}</span>
                <span className="date">{data.whenWhere}</span>
                <span className="degree">{data.degree}</span>
                <span className="summary">{data.summary}</span>
              </div>
              <div className="reference-section">
                <span className="name">{data.name}</span>
                <span className="company">{data.company}</span>
                <span className="reference-job">{data.referenceJob}</span>
                <span className="phone">{data.phone}</span>
                <span className="email">{data.email}</span>
                <span className="relationship">{data.relationship}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeTabs;
