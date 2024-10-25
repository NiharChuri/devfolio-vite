import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Automatically stop loading after a few seconds (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading duration of 3 seconds

    return () => clearTimeout(timer); // Clean up the timer when unmounting
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar scrollToSection={scrollToSection} /> {/* Pass the scroll function as a prop */}
          <div className="max-w-7xl mx-auto w-[90%] lg:w-[70%] px-6">
            <HeroSection />
            <About />
            <Skill />
            <Work />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;