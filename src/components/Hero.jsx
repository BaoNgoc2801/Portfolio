import React from "react";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white py-10 mt-20">
      <motion.img
        initial={{ opacity: 0, sacle: 0 }}
        animate={{ opacity: 1, sacle: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        src={avatar}
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4 mt-8"
        >
          Hello, I am Bao Ngoc
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-purple-500"
          >
            Front-end Software Developer
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 text-2xl mb-8"
        >
          Welcome to My Personal Website
        </motion.p>
        <div className="flex justify-center space-x-4 mb-10">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Hire Me
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white border-white px-6 py-3 rounded-full"
          >
            <Link to="about" smooth={true} duration={500} offset={-70}>
              My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
