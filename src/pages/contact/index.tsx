import React from "react";
import NavBar from "../../components/nav/index";
import ContactComponent from "../../components/contact/index";
import "./index.scss";

function ContactPage() {
  return (
    <div className="contact-page">
      <NavBar />
      <ContactComponent />
    </div>
  );
}
export default ContactPage;
