import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactLinks = [
    {
      text: 'neelshha@gmail.com',
      href: 'mailto:neelshha@gmail.com',
    },
    {
      text: 'GITHUB',
      href: 'https://github.com/yourusername',
    },
    {
      text: 'LINKEDIN',
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      text: 'INSTAGRAM',
      href: 'https://linkedin.com/in/yourusername',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-mono">
            <span className="border-b-2 border-white/20 pb-2">CONTACT</span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              <span className="border-b border-white/20 pb-1">GET IN TOUCH</span>
            </h3>
            <p className="text-white/60 font-mono mb-12 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;