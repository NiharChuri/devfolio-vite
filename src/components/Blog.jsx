import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Building a Modern Portfolio',
    date: 'March 15, 2024',
    excerpt: 'A deep dive into creating a responsive portfolio with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  },
  {
    title: 'The Art of Clean Code',
    date: 'March 10, 2024',
    excerpt: 'Exploring principles and practices for writing maintainable and efficient code.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'UI/UX Design Principles',
    date: 'March 5, 2024',
    excerpt: 'Understanding the fundamentals of creating intuitive and engaging user interfaces.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-mono">
            <span className="border-b-2 border-white/20 pb-2">BLOG</span>
          </h2>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex gap-6">
                    <div className="w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-2/3">
                      <div className="mb-4">
                        <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 font-mono">
                        {post.title}
                      </h3>

                      <p className="text-white/60 mb-6 font-mono text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-end">
                        <motion.a
                          href="#"
                          className="text-white/80 hover:text-white font-mono text-sm uppercase tracking-widest"
                          whileHover={{ x: 5 }}
                        >
                          Read More →
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
