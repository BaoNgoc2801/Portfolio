import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> }
];

const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> }
];

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div id="skills" className="text-white py-10 flex flex-col items-center justify-center">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center"
                        >
                            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                                {tech.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{tech.name}</h3>
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold underline mb-8">Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center"
                        >
                            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                                {tool.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{tool.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
