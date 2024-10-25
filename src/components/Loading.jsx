import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Loading = () => {
  const controls = useAnimation();
  const [percentage, setPercentage] = useState(0); // State to track percentage loaded

  useEffect(() => {
    const totalDuration = 2000; // Total loading duration in milliseconds
    const intervalTime = 100; // Update percentage every 100ms
    const step = 100 / (totalDuration / intervalTime); // Calculate percentage step

    // Start percentage counter
    const percentageInterval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(percentageInterval); // Stop at 100%
          return 100;
        }
        return Math.min(prev + step, 100); // Increment by calculated step
      });
    }, intervalTime);

    // Trigger controls to slide up after the loading duration
    const timer = setTimeout(() => {
      controls.start({ y: '-100%', transition: { duration: 1 } }); // Slide up effect
      clearInterval(percentageInterval); // Clear the interval once the loading is done
    }, totalDuration);

    return () => {
      clearTimeout(timer); // Cleanup on unmount
      clearInterval(percentageInterval); // Cleanup interval on unmount
    };
  }, [controls]);

  return (
    <motion.div
      className="flex h-screen relative max-w-[90%] lg-w-[70%] bg-[#121212] justify-center items-center"
      initial={{ opacity: 1 }}
      animate={controls}
      exit={{ opacity: 0 }} // Animate exit opacity for smoother transition
    >
      {/* Large Loading Percentage in the bottom-right */}
      <div className="absolute bottom-[10rem] right-[5px] lg:bottom-0 lg:right-0 bg-gradient-to-r from-yellow to-cyan bg-clip-text text-transparent text-[10rem] lg:text-[20rem] font-bold">
        {Math.floor(percentage)}
      </div>
    </motion.div>
  );
};

export default Loading; // Exporting the Loading component