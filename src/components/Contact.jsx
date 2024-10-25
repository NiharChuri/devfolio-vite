import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Optional: Separate component for the diagonal arrow
const DiagonalArrow = () => {
  return <span>{String.fromCharCode(0x2197)}</span>; // ↗ (U+2197)
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: false, // Allow animation to trigger every time it comes into view
  });

  const [animationState, setAnimationState] = useState('hidden'); // Start hidden

  useEffect(() => {
    if (inView) {
      setAnimationState('visible'); // Set to visible when in view
    } else {
      setAnimationState('hidden'); // Reset to hidden when out of view
    }
  }, [inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 80 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 },  // Fade in and move to original position
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="flex flex-col min-h-screen items-left justify-center"
    >
      <div>
        <h2 className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]">
          Contact
        </h2>

        <motion.p
          className="text-lg mb-10"
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <a
            href="mailto:neelshha@gmail.com"
            className="relative text-2xl sm:text-4xl md:text-5xl leading-relaxed inline-block text-white hover:text-white bg-clip-text overflow-visible before:absolute before:bottom-[-8px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500 before:ease-in-out"
            style={{ lineHeight: '1.2' }} // Increase line height to provide space for descenders
          >
            neelshha@gmail.com <DiagonalArrow />
          </a>
        </motion.p>

        <div className="flex flex-col space-y-4">
          {['LinkedIn', 'Instagram'].map((link, index) => (
            <motion.p
              key={link}
              className="text-lg"
              initial="hidden"
              animate={animationState}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <a
                href={link === 'LinkedIn' ? "https://www.linkedin.com" : "https://www.instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-2xl sm:text-4xl md:text-5xl mb-5 leading-relaxed inline-block text-white hover:text-white overflow-visible before:absolute before:bottom-[-8px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500 before:ease-in-out"
                style={{ lineHeight: '1.2' }} // Increase line height for links as well
              >
                {link} <DiagonalArrow />
              </a>
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;