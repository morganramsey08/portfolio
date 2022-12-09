import React from "react";
import NavBar from "../../components/nav/index.tsx";
import ContactComponent from "../../components/contact/index.tsx";
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
