import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from "../constants";

const Skill = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        bounce: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      rotateX: 15, // 3D tilt effect
      rotateY: 30,
      transition: {
        duration: 0.4,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  return (
    <section id="skill" ref={ref} className="flex flex-col min-h-screen min-w-screen items-left justify-center">
      <div className="mx-auto w-[100%]">
        <motion.h2
          className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[12%]"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-end text-center rounded-lg mb-3 sm:mb-10"
              variants={itemVariants}
              whileHover="hover" // Apply hover animations
            >
              <motion.img
                src={skill.imgSrc}
                alt={skill.name}
                className="max-h-[2.5rem] max-w-[2.5rem] rounded-lg mb-2 sm:max-h-[5rem] sm:max-w-[5rem]"
                variants={itemVariants} // Same animation for image
                whileHover="hover"
              />
              <motion.p
                className="text-xs md:text-[0.8rem]"
                variants={itemVariants} // Same animation for text
                whileHover="hover"
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;