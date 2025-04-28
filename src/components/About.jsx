import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-mono">
            <span className="border-b-2 border-white/20 pb-2">ABOUT</span>
          </h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 font-mono leading-relaxed"
            >
              I'm a software engineer with a passion for creating elegant solutions to complex problems. 
              My journey in technology began with a curiosity about how things work, which evolved into 
              a deep appreciation for clean, efficient code and user-centered design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 font-mono leading-relaxed"
            >
              With experience in both frontend and backend development, I focus on building scalable 
              applications that deliver exceptional user experiences. I believe in writing code that 
              is not only functional but also maintainable and well-documented.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="border-b border-white/20 pb-1">TECHNICAL SKILLS</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Node.js',
                  'Python', 'SQL', 'AWS', 'Docker',
                  'Git', 'CI/CD', 'REST APIs', 'GraphQL'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-white/80 font-mono text-sm uppercase tracking-widest"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;