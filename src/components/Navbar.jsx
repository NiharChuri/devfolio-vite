import React, { useEffect, useState } from "react";
import { navItems } from "../constants"; // Adjust the path as necessary
import { motion } from "framer-motion";
import Logo from "../assets/logo.png"; // Import your Logo component

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].section); // Default to the first section
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Smooth Scroll Function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust based on the height of your fixed navbar
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(`#${item.section}`)
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update the active section
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      className="sticky top-4 z-50 py-3 px-4 backdrop-blur-lg border border-neutral-700 rounded-full mx-auto w-[90%] lg:w-[70%] shadow-lg drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 relative lg:text-sm">
        {/* Navbar for larger screens */}
        <div className="hidden lg:flex justify-between items-center">
          <motion.div
            className="flex items-center flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img src={Logo} alt="Logo" className="h-7 w-7 mr-2" />
          </motion.div>
          <ul className="flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div className="relative inline-block">
                  <motion.button
                    onClick={() => scrollToSection(item.section)}
                    className={`transition-all duration-500 ease-in-out transform ${
                      activeSection === item.section
                        ? "border-none text-black bg-gradient-to-r from-yellow to-cyan rounded-full px-4 py-2 shadow-lg scale-105"
                        : "hover:bg-gradient-to-r from-yellow to-cyan bg-clip-text hover:shadow-xl hover:scale-110 hover:translate-y-1"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Navbar for smaller screens */}
        <div className="flex lg:hidden justify-center items-center w-full">
          <ul className="flex items-center justify-center w-full space-x-3">
            <motion.li
              className="flex-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img src={Logo} alt="Logo" className="h-5 w-5 mr-3" />
            </motion.li>
            <div className="flex flex-row justify-center space-x-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex-initial text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div className="relative inline-block">
                    <motion.button
                      onClick={() => scrollToSection(item.section)}
                      className={`text-[0.7rem] transition-all duration-300 ease-in-out transform ${
                        activeSection === item.section
                          ? "border-none text-blink bg-gradient-to-r from-yellow to-cyan rounded-full px-2 py-1 shadow-lg scale-105"
                          : "hover:bg-gradient-to-r from-yellow to-cyan bg-clip-text hover:shadow-xl hover:scale-110 hover:translate-y-1 rounded-md"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  </motion.div>
                </motion.li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;