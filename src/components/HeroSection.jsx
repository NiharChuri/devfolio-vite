import { motion } from "framer-motion";

const HeroSection = () => {
  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-blink">
      <div id="hero" className="max-w-7xl mx-auto w-[90%] lg:w-[70%] px-6 flex flex-col min-h-screen items-left justify-center">
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-8xl text-left tracking-wide font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I am<br />
          <span className="bg-gradient-to-r from-yellow to-cyan text-transparent bg-clip-text">
            Neel Shah-<br />
          </span>
          Blending Passion<br />
          with Pixels
        </motion.h1>
        
        <div className="flex flex-col pt-5 md:flex-row md:flex-wrap justify-left my-10">
          <motion.a
            href="#"
            className="bg-gradient-to-r from-yellow to-cyan py-3 px-6 mx-5 rounded-full text-blink border text-center text-sm md:text-base mb-2 md:mb-0"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("contact");
            }}
            className="hidden md:inline-block py-3 px-6 mx-5 rounded-full border text-center text-sm md:text-base mb-2 md:mb-0"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact me
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;