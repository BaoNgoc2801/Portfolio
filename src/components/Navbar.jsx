import React, { useState } from 'react';
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import CV from "../assets/CV_FE_TranNgoc.pdf";


const Navbar = () => {
    const variants = {
        open: {
            clipPath: "circle(1200px at 43px 43px)",
            transition: { type: "spring" },
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: { type: "spring", duration: 1 },
        },
    };

    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState(""); // Lưu mục đang được chọn


    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Skills", to: "skills" },
        { id: 3, text: "Project", to: "project" },
        { id: 4, text: "Contact", to: "contact" },
    ];

    return (
        <div>
            {/* Desktop Navbar */}
            <motion.div
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 py-6">
                <div className="container mx-auto hidden md:flex justify-between items-center ">
                <div className="text-xl lg:text-2xl font-bold items-center gap-1">
                    <span className="text-white">FRONTEND</span>
                    <span className="text-purple-500"> Developer</span>
                </div>
                <ul className="flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
                    {items.map(({id, text, to}) => (
                        <li key={id}>
                            <Link
                                to={to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className={`${
                                    active === to ? "cursor-pointer underline decoration-2 text-purple-400" : ""
                                } cursor-pointer hover:text-purple-400`}
                                onClick={() => setActive(to)}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a
                    href={CV}
                    download="CV_FE_TranNgoc.pdf"
                    className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
                >
                    Download CV
                </a>
                </div>
            </motion.div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between">
                <motion.div animate={menu ? "open" : "closed"} className="relative z-10">
                    <motion.div variants={variants} className="bg-white w-2/3 h-screen text-black fixed top-0 left-0">
                    <div className="px-7 py-6">
                            <button onClick={() => setMenu((prev) => !prev)}>
                                {menu ? <IoClose size={30} /> : <IoMenuOutline size={30} />}
                            </button>
                        </div>
                        {menu && (
                            <div className="flex flex-col justify-center items-center">
                                <ul className="space-y-6 text-black text-lg">
                                    {items.map(({id, text, to}) => (
                                        <li
                                            key={id}
                                            className="cursor-pointer underline hover:text-purple-500 duration-200 cursor-pointer"
                                        >
                                            <Link
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                className="hover:underline"
                                                onClick={() => setMenu(false)}
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={CV}
                                    download="CV_FE_TranNgoc.pdf"
                                    className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full"
                                >
                                    Download CV
                                </a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 100, y: 100}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-xl font-bold flex items-center gap-2 py-6 px-4">
                    <span className="text-white">FRONTEND</span>
                    <span className="text-purple-500">Developer</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;
