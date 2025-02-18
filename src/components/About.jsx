import React from 'react';
import aboutImg from "../assets/avatar1.jpg"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <div id="about" className="text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-8 underline">
                    About Me
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mb-12 text-gray-400 text-left md:text-center">
                    {/*----------------------------------------------------------------------------------------------------*/}
                </motion.p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mb-8 md:mb-0 md:mr-8 flex justify-center">
                        <img
                            src={aboutImg}
                            className="w-2/3 sm:w-1/2 md:w-10/12" />
                    </motion.div>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl text-justify">
                        I am Bao Ngoc, a Frontend Software Developer and currently a third-year student at International University – Vietnam National University, Ho Chi Minh City.
                        <p className="mt-4">I specialize in building efficient, user-friendly websites that are both aesthetically pleasing and engaging. With a creative mindset and programming skills, I not only focus on user experience but also ensure that the interface conveys the right message and brand identity.
                            If you are looking for a frontend developer who can design and optimize websites, feel free to contact me!            </p>
                    </motion.p>
                </div>

                <div className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0">
                    {/* Other sections can be added here */}
                </div>
            </div>
        </div>
    );
};

export default About;
