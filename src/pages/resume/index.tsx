import React from "react";
import NavBar from "../../components/nav/index";
import Hero from "../../components/hero-resume/index";
import ContactComponent from "../../components/contact/index";
import ResumeTabs from "../../components/resume-tabs/index";

function ResumePage() {
  return (
    <div className="resume-page">
      <NavBar />
      <Hero />
      <ResumeTabs data={[]} />
      <ContactComponent />
    </div>
  );
}
export default ResumePage;
