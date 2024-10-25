import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: false, // Allow animation to trigger every time it comes into view
  });

  // State to manage the animation visibility
  const [animationState, setAnimationState] = useState('hidden'); // Start hidden

  // Effect to trigger animation when in view
  useEffect(() => {
    if (inView) {
      setAnimationState('visible'); // Set to visible when in view
    } else {
      setAnimationState('hidden'); // Reset to hidden when out of view
    }
  }, [inView]);

  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 80 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 },  // Fade in and move to original position
  };

  return (
    <motion.div
      id="contact"
      ref={ref} // Attach the ref to the motion div
      className="flex flex-col min-h-screen items-left justify-center"
    >
      <div>
        <h2 className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]">
          Contact
        </h2>

        <motion.p
          className="text-lg mb-10"
          initial="hidden"
          animate={animationState} // Animate based on the state
          variants={fadeIn}
          transition={{ duration: 0.5 }} // Duration for this specific link
        >
          <a
            href="mailto:neelshha@gmail.com"
            className="relative text-2xl sm:text-4xl md:text-5xl leading-relaxed inline-block hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow to-cyan before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500"          >
            neelshha@gmail.com <span className="ml-1">↗</span>
          </a>
        </motion.p>

        <div className="flex flex-col space-y-4">
          {['LinkedIn', 'Instagram'].map((link, index) => (
            <motion.p
              key={link}
              className="text-lg"
              initial="hidden"
              animate={animationState} // Animate based on the state
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.3 }} // Stagger the delay for each link
            >
              <a
                href={link === 'LinkedIn' ? "https://www.linkedin.com" : "https://www.instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-2xl sm:text-4xl md:text-5xl mb-5 leading-relaxed inline-block hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow to-cyan before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500"              >
                {link} <span className="ml-1">↗</span>
              </a>
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;