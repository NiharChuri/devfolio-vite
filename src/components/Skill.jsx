import { motion } from 'framer-motion';
import { skills } from "../constants";

const Skill = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="skill"
            className="flex flex-col min-h-screen h-full sm:h-[80vh] md:h-[70vh] lg:h-[60vh] items-left justify-center"
        >
            <div className="mx-auto w-[100%]">
                <motion.h2
                    className="text-lg sm:text-lg lg:text-lg text-center tracking-wide font-bold mb-[12%]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    My Skills
                </motion.h2>
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-end text-center rounded-lg mb-3 sm:mb-10"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 },
                            }}
                        >
                            <motion.img
                                src={skill.imgSrc}
                                alt={skill.name}
                                className="max-h-[2.5rem] max-w-[2.5rem] rounded-lg mb-2 sm:max-h-[5rem] sm:max-w-[5rem]"
                                variants={itemVariants}
                            />
                            <motion.p
                                className="text-xs md:text-[0.8rem]"
                                variants={itemVariants}
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