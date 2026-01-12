import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = ({ isOpen }) => {
  const aliens = [
    "/images/alien1.png",
    "/images/alien2.png",
    "/images/alien3.png",
    "/images/alien4.png",
    "/images/alien5.png",
    "/images/alien6.png",
    "/images/slider7.png?v=3",
    "/images/slider8.png?v=3",
    "/images/slider9.png?v=3",
    "/images/slider10.png?v=3",
    "/images/slider11.png?v=3",
    "/images/slider12.png?v=3",
  ];

  return (
    <div className={`hero ${isOpen ? "sidebar-open" : ""}`} id="home">

      <div className="hero-header">
        <h1>OMNITRIX DATABASE</h1>
        <p>SELECT YOUR HERO</p>
      </div>

      <div className="slider-container">
        <motion.div
          className="alien-slider"
          initial={{ x: 0 }}
          animate={{ x: "-25%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust speed as needed
          }}
        >
          {/* Render enough duplicates for seamless looping */}
          {[...aliens, ...aliens, ...aliens, ...aliens].map((src, i) => (
            <motion.div className="alien-card" key={i}>
              <img src={src} alt={`Alien ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div >
  );
};

export default Hero;
