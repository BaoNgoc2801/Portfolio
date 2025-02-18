import React from 'react';
import project1 from "../assets/IUCare.png";
import project2 from "../assets/IUSchedule.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "IU Care",
            description: "A web platform for doctors to schedule appointments, conduct consultations, and issue prescriptions for patients.",
            image: project1,
            link: "https://github.com/dnchuong17/IUCareFE"
        },
        {
            id: 2,
            title: "IU Schedule",
            description: "A web application for students to register for courses, view their current timetable, add deadlines, take notes for each subject, and prepare their schedule for the next semester.",
            image: project2,
            link: "https://github.com/dnchuong17/IU_Schedule_FE"
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div id="project" className="py-16 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl text-white font-bold text-center mb-12 underline">
                    Latest Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <motion.div
                            ref={ref}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{delay: project.id * 0.2, duration: 0.5}}
                            key={project.id}
                            className="bg-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105">
                            <img
                                src={project.image}
                                className="w-full h-56 object-cover object-center rounded-t-2xl"
                                alt={project.title}
                            />

                            <div className="p-6">
                                <h3 className="text-2xl text-white font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>
                                <a href={project.link}>
                                    <button className="relative overflow-hidden border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-full font-medium transition-all duration-300
                                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-purple-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                                    hover:text-white hover:before:scale-x-100 hover:relative z-10">
                                        <span className="relative z-10">Details</span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
