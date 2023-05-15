import React, { useEffect, useRef, useState } from "react";
import { resumeData } from "./data.js";
import "./index.scss";

interface Job {
  job: string;
  jobDates: string;
  jobTitle: string;
  jobTask: JSX.Element;
}

interface Education {
  college: string;
  degree: string;
  whenWhere: string;
  summary: string;
}

interface Reference {
  name: string;
  referenceJob: string;
  company: string;
  phone: string;
  email: string;
  relationship: string;
}

interface ResumeSection {
  key: string;
  Name: string;
  data: Job[] | Education[] | Reference[];
}

interface Props {
  data: ResumeSection[];
}

interface JobProps {
  data: Job;
}

const JobSection = ({ data }: JobProps) => {
  return (
    <div className="job-section">
      <span className="job">{data.job}</span>
      <span className="date">{data.jobDates}</span>
      <span className="title">{data.jobTitle}</span>
      {data.jobTask}
    </div>
  );
};

interface EducationProps {
  data: Education;
}

const CollegeSection = ({ data }: EducationProps) => {
  return (
    <div className="college-section">
      <span className="college">{data.college}</span>
      <span className="date">{data.whenWhere}</span>
      <span className="degree">{data.degree}</span>
      <span className="summary">{data.summary}</span>
    </div>
  );
};

interface ReferenceProps {
  data: Reference;
}

const ReferenceSection = ({ data }: ReferenceProps) => {
  return (
    <div className="reference-section">
      <span className="name">{data.name}</span>
      <span className="company">{data.company}</span>
      <span className="reference-job">{data.referenceJob}</span>
      <span className="phone">{data.phone}</span>
      <span className="email">{data.email}</span>
      <span className="relationship">{data.relationship}</span>
    </div>
  );
};

const ResumeTabs = ({ data }: Props) => {
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
          if ("job" in data) {
            return <JobSection key={index} data={data} />;
          } else if ("college" in data) {
            return <CollegeSection key={index} data={data} />;
          } else if ("name" in data) {
            return <ReferenceSection key={index} data={data} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ResumeTabs;
