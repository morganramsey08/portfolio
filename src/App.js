import React, { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home/index.tsx";
import AboutPage from "./pages/about/index.tsx";
import ResumePage from "./pages/resume/index.tsx";
import ContactPage from "./pages/contact/index.tsx";
import FourOhFourPage from "./pages/404/index.tsx";

import "./App.scss";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route key="homepage" element={<HomePage />} path={"/"} />
          <Route key="about" element={<AboutPage />} path="/about" />
          <Route key="resume" element={<ResumePage />} path="/resume" />
          <Route key="contact" element={<ContactPage />} path="/contact" />
          <Route path="*" element={<FourOhFourPage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
