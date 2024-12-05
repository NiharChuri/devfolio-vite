import React from 'react';
import { projects } from '../constants'; // Adjust the path based on your folder structure
import { motion } from 'framer-motion';

const Work = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="work"
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-8 pb-12 lg:pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is visible
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h1
        className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]"
        variants={itemVariants}
      >
        My Work
      </motion.h1>

      {/* Grid Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center w-full max-w-6xl"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 },
            }}
          >
            {/* Image Section with Custom Aspect Ratio */}
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 object-cover w-full h-full rounded-t-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between h-auto">
              <motion.h2
                className="text-xl font-semibold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className="text-sm mt-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Tools Used */}
              <motion.div
                className="flex space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {project.tools.map((tool, index) => (
                  <motion.img
                    key={index}
                    src={tool}
                    alt={`Tool ${index + 1}`}
                    className="w-6 h-6"
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>

              {/* View Project Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-yellow to-cyan text-blink py-2 px-3 rounded-full shadow-md text-sm w-32 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;