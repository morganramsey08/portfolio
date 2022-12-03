import React, { useState, useEffect } from "react";
import NavBar from "./components/nav/index.tsx";
import HomeTownHero from "./components/hometown-hero/index.tsx";

import "./App.css";

function App() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [insideThePage, setInsideThePage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;
    console.log(currentYOffset);

    if (currentYOffset > 30) {
      setInsideThePage(true);
    };

    if (currentYOffset < 30) {
      setInsideThePage(false);
    };

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <div className="App">
      <NavBar visible={visible} insideThePage={insideThePage} />
      <HomeTownHero />
    </div>
  );
}

export default App;
