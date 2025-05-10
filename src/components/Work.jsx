import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MumbaiMUN Website',
    description: 'A modern web application built with React and Node.js',
    technologies: ['React', 'Node.js', 'TailwindCSS'],
    link: 'https://www.mumbaimun.com',
    image: '/images/munsoc.png'
  },
  {
    title: 'Taqneeq fest Website',
    description: "A website for NMIMS' Techfest",
    technologies: ['React', 'Node.js', 'TailwindCSS'],
    link: 'https://www.taqneeqfest.com/',
    image: '/images/taqneeq.png'
  },
  {
    title: 'Social Conclave Website',
    description: 'A website for a environmental debate competition (down for maintenance)',
    technologies: ['Next.js'],
    link: 'https://www.socialconclave.in',
    image: '/images/conclave.jpeg'
  }
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-primary-50 dark:bg-dark-900 py-20 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-dark-50 mb-12 font-sora">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-600 group-hover:border-primary-300 dark:group-hover:border-dark-700 transition-colors duration-300">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-600 group-hover:bg-primary-300 dark:group-hover:bg-dark-700 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-600 group-hover:bg-primary-300 dark:group-hover:bg-dark-700 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-600 group-hover:bg-primary-300 dark:group-hover:bg-dark-700 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-600 group-hover:bg-primary-300 dark:group-hover:bg-dark-700 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="relative w-full h-48 mb-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-4 font-sora">
                    {project.title}
                  </h3>
                  <p className="text-gray-700/60 dark:text-white/60 mb-6 font-sora text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-primary-900/40 dark:text-dark-100/40 font-sora text-xs uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-block text-gray-800/80 dark:text-white/80 hover:text-gray-900 dark:hover:text-white font-sora text-sm uppercase tracking-widest"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;