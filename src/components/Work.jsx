import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants'; // Adjust the path based on your folder structure
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: false, // Allow the animation to trigger multiple times
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the child animations
        duration: 0.6, // Duration for the transition of the container
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        duration: 0.5, // Duration for the transition of each item
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)', // Softer glow effect
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    whileTap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id="work" className="p-8 md:p-16" ref={ref}>
      <h1 className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]">
        My Work
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12" // Responsive grid layout for cards
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col w-full border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105" // Polished card with subtle shadow
            variants={itemVariants}
          >
            {/* Image Section with Fixed Landscape Aspect Ratio */}
            <div className="relative" style={{ width: '100%', paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 object-cover w-full h-full rounded-t-2xl transition-shadow duration-300 ease-in-out"
                whileHover={{
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.05,
                  boxShadow: '0 25px 40px rgba(0, 0, 0, 0.15)', // Softer shadow
                  transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                  },
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>

              {/* Tools Used */}
              <div className="flex space-x-2 mt-4">
                {project.tools.map((tool, index) => (
                  <img key={index} src={tool} alt={`Tool ${index + 1}`} className="w-6 h-6" />
                ))}
              </div>

              {/* View Project Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-yellow to-cyan text-blink py-2 px-3 rounded-full transition duration-300 shadow-md text-sm w-32 text-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="whileTap"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;