import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Optional: Separate component for the diagonal arrow
const DiagonalArrow = () => {
  return <span>{String.fromCharCode(0x2197)}</span>; // ↗ (U+2197)
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 }, // Starts slightly below and transparent
  visible: { opacity: 1, y: 0 }, // Ends fully visible in its original position
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animation for child elements
    },
  },
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Animation will only trigger once
  });

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen px-4"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <div className="w-full max-w-4xl">
        {/* Heading with a subtle fade-in */}
        <motion.h2
          className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]"
          variants={fadeInVariant}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        {/* Email link with a fade-in */}
        <motion.p
          className="text-lg mb-10 text-left"
          variants={fadeInVariant}
          transition={{ duration: 0.8 }}
        >
          <a
            href="mailto:neelshha@gmail.com"
            className="relative text-xl sm:text-4xl md:text-5xl leading-relaxed inline-block text-white hover:text-white bg-clip-text overflow-visible before:absolute before:bottom-[-8px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500 before:ease-in-out"
            style={{ lineHeight: '1.2' }} // Increase line height to provide space for descenders
          >
            neelshha@gmail.com <DiagonalArrow />
          </a>
        </motion.p>

        {/* Links with staggered animations */}
        <motion.div
          className="flex flex-col space-y-4 text-left"
          variants={staggerContainer}
        >
          {['LinkedIn', 'Instagram'].map((link, index) => (
            <motion.p
              key={link}
              className="text-lg"
              variants={fadeInVariant}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <a
                href={
                  link === 'LinkedIn'
                    ? 'https://www.linkedin.com/in/neelshha/'
                    : 'https://www.instagram.com/neelshha/'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-xl sm:text-4xl md:text-5xl mb-5 leading-relaxed inline-block text-white hover:text-white overflow-visible before:absolute before:bottom-[-8px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-yellow before:to-cyan hover:before:w-full before:transition-all before:duration-500 before:ease-in-out"
                style={{ lineHeight: '1.2' }} // Increase line height for links as well
              >
                {link} <DiagonalArrow />
              </a>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;