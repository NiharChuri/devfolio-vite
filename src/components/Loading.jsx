import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Loading = () => {
  const controls = useAnimation();
  const [percentage, setPercentage] = useState(0); // State to track percentage loaded

  useEffect(() => {
    const totalDuration = 2000; // Total loading duration in milliseconds
    const incrementDuration = 100; // Duration for each increment
    const totalSteps = totalDuration / incrementDuration; // Total steps for percentage updates
    const step = 100 / totalSteps; // Calculate percentage step

    let currentStep = 0; // Current step counter

    // Start percentage counter using requestAnimationFrame
    const updatePercentage = () => {
      if (currentStep < totalSteps) {
        setPercentage(prev => Math.min(prev + step, 100)); // Increment by calculated step
        currentStep++;
        requestAnimationFrame(updatePercentage); // Continue the update
      }
    };

    updatePercentage(); // Start the percentage updates

    // Trigger controls to slide up after the loading duration
    const timer = setTimeout(() => {
      controls.start({ y: '-100%', transition: { duration: 1 } }); // Slide up effect
      setPercentage(100); // Ensure percentage is set to 100% at the end
    }, totalDuration);

    return () => {
      clearTimeout(timer); // Cleanup on unmount
    };
  }, [controls]);

  return (
    <motion.div
      className="flex h-screen relative max-w-[90%] lg:w-[70%] bg-[#121212] justify-right items-right"
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