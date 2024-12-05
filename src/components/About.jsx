import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="about"
            className="flex flex-col min-h-[70vh] lg:min-h-screen items-left justify-center px-4 md:px-6"
        >
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[10%]"
                    variants={textVariants}
                >
                    About Me
                </motion.h2>
                <motion.div>
                    <motion.p
                        className="text-sm md:text-sm lg:text-2xl leading-relaxed mb-6"
                        variants={textVariants}
                    >
                        I’m Neel Shah, a software developer specializing in web design and UI/UX, with expertise in frameworks like React.js 
                        and Tailwind CSS. I focus on creating efficient, scalable, and user-friendly solutions that solve real-world challenges.
                    </motion.p>
                    <motion.p
                        className="text-sm md:text-sm lg:text-2xl leading-relaxed"
                        variants={textVariants}
                    >
                        Currently pursuing a Bachelor’s degree in Computer Science with a specialization in Cybersecurity at Mukesh Patel 
                        School of Technology Management and Engineering (Class of 2026), I’m passionate about blending innovation with 
                        functionality to deliver impactful results.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;