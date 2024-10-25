import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is visible
        triggerOnce: false, // Ensures the animation happens again when coming back to view
    });

    // When the section is in view, start the animation
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden'); // Reset animation when out of view
        }
    }, [controls, inView]);

    // Subtler animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20, scale: 0.98 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            transition: {
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1], // Smoother easing curve
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delayChildren: 0.2, // Subtle delay for child elements
                staggerChildren: 0.1, // Faster stagger for subtle cascading effect
            }
        }
    };

    return (
        <section id="about" ref={ref} className="flex flex-col min-h-screen items-left justify-center">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    About Me
                </motion.h2>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.p 
                        className="text-xs md:text-xl lg:text-2xl leading-relaxed mb-6"
                        variants={textVariants}
                    >
                        Hi, I'm Neel Shah, a passionate developer blending creativity with
                        technical precision. My journey started with a deep fascination for
                        technology and has evolved into a pursuit of creating impactful
                        digital experiences. With a background in Computer Science & Cybersecurity,
                        I'm driven by the desire to craft solutions that are both visually appealing
                        and functionally robust.
                    </motion.p>
                    <motion.p 
                        className="text-xs md:text-xs lg:text-2xl leading-relaxed"
                        variants={textVariants}
                    >
                        Whether it's working on animations, responsive web design, or developing
                        branding for a project like 'Wake & Whiskey', I strive to push the limits of
                        innovation, creating seamless, user-centric designs that blend passion with pixels.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;