import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";

// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// };

const App = () => {
  return (
    <div className="bg-[#0e0c1e]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
