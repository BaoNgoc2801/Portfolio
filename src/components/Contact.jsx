import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
      <div id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-4xl font-bold text-white"
          >
            Contact <span className="text-purple-500">Me</span>
          </motion.h2>
          <motion.p
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-slate-400 mt-4"
          >
            Let us collaborate and make good together
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 ">
            <ContactItem
                icon={<FaPhone className="w-8 h-8" />}
                title="Call Me"
                content="+334 040 072"
                link="tel:+334040072"
            />
            <ContactItem
                icon={<FaEnvelope className="w-8 h-8" />}
                title="Email"
                content="tlbngoc.work@gmail.com"
                link="mailto:tlbngoc.work@gmail.com"
            />
            <ContactItem
                icon={<FaMapMarkedAlt className="w-8 h-8" />}
                title="Address"
                content="Thu Duc, Ho Chi Minh"
            />
          </div>

        </div>
          <div>
              <motion.div
                  ref={ref}
                  initial={{opacity: 0}}
                  animate={inView ? {opacity: 1} : {}}
                  transition={{delay: 0.4, duration: 0.3}}
                  className="mt-48 flex flex-col items-center text-center p-5 text-white border-t-2 border-purple-500"
              >
                  <p>2025. All Rights Reserved</p>
                  <p>About this website: built with ReactJS, JavaScript, TailwindCSS, Framer Motion, and Vercel
                      hosting.</p>
              </motion.div>
          </div>

      </div>
  );
};

const ContactItem = ({icon, title, content, link}) => (
    <motion.div
        initial={{opacity: 0, x: -30}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.3}}
        className="flex items-center space-x-4"
    >
        <div className="bg-purple-500 p-4 rounded-full text-white w-12 h-12 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <p className="text-lg font-medium text-purple-500">{title}</p>
        {link ? (
            <a href={link} className="text-white hover:text-purple-400 transition">
              {content}
            </a>
        ) : (
            <p className="text-white">{content}</p>
        )}
      </div>
    </motion.div>
);


export default Contact;
