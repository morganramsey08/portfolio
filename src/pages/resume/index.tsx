import React from "react";
import NavBar from "../../components/nav/index.tsx";
import Hero from "../../components/hero-resume/index.tsx";
import ContactComponent from "../../components/contact/index.tsx";
import ResumeTabs from "../../components/resume-tabs/index.tsx";

function ResumePage() {
  return (
    <div className="resume-page">
      <NavBar />
      <Hero />
      <ResumeTabs />
      <ContactComponent />
    </div>
  );
}
export default ResumePage;
