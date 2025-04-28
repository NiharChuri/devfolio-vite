import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Value from "./components/Value";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <About />
        <Work />
        <Blog />
        <Value />
        <Contact />
      </div>
    </>
  );
};

export default App;