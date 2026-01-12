import React, { useState, useEffect } from "react";
import "./Slider.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons no longer needed
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const aliens = [
    {
      name: "Swampfire",
      img: "/images/slider4.png",
      description:
        "A methane-based alien with plant powers and the ability to ignite flames. " +
        "Swampfire is covered with a tough, bark-like skin that makes him resistant to physical damage. " +
        "He can regenerate his body by growing new limbs from plant matter, making him nearly unstoppable in battle. " +
        "Besides offense, Swampfire uses his vines and roots for defense, trapping enemies or shielding allies. " +
        "His flames can burn even underwater, giving him a terrifying edge in combat.",
      background: "linear-gradient(135deg, #0a0f2c, #0d3b1f)",
    },
    {
      name: "Humungousaur",
      img: "/images/slider6.png",
      description:
        "A giant dinosaur-like alien with immense strength and durability. " +
        "Standing over 12 feet tall, Humungousaur’s sheer size makes him a powerhouse in any fight. " +
        "He can increase his body size up to nearly 60 feet, making his strength and impact even greater. " +
        "Despite his massive build, Humungousaur is surprisingly agile and can react quickly in combat. " +
        "His thick, armor-like skin provides natural protection against most forms of attack, allowing him to charge headfirst into danger.",
      background: "linear-gradient(135deg, #1a0f0f, #4d1a1a)",
    },
    {
      name: "Big Chill",
      img: "/images/slider1.png",
      description:
        "A moth-like alien with the power of intangibility and ice breath. " +
        "Big Chill can phase through solid objects, making him nearly impossible to trap or contain. " +
        "His wings allow him to fly silently through the air, striking fear into his enemies with ghost-like movements. " +
        "He can exhale freezing winds capable of encasing opponents in solid ice within seconds.\n\n" +
        "Despite his eerie and mysterious appearance, Big Chill is a calm and strategic fighter who prefers precision over brute force.",
      background: "linear-gradient(135deg, #0a0f2c, #1e3c72)",
    },
    {
      name: "Echo Echo",
      img: "/images/slider2.png",
      description:
        "A small silicon-based alien capable of creating sonic clones. " +
        "Echo Echo’s primary ability is to duplicate himself, overwhelming opponents with sheer numbers. " +
        "Each clone is fully functional, allowing him to coordinate attacks or distract enemies with ease. " +
        "He can unleash powerful sonic screams that disorient foes and shatter obstacles. " +
        "Despite his small size, Echo Echo’s versatility and teamwork abilities make him one of the most resourceful aliens in Ben’s arsenal.",
      background: "linear-gradient(135deg, #1a1a1a, #444444)",
    },
    {
      name: "Chromastone",
      img: "/images/slider5.png",
      description:
        "A crystalline alien with the ability to absorb and channel energy. " +
        "Chromastone’s body is composed of nearly indestructible crystal, making him resistant to physical and energy-based attacks.\n\n" +
        "He can absorb energy blasts and redirect them as powerful beams of raw force. " +
        "His glowing body emits radiant light, often intimidating enemies before the battle even begins. " +
        "Chromastone combines durability, energy control, and striking appearance, making him a defensive powerhouse and offensive weapon at the same time.",
      background: "linear-gradient(135deg, #220a2c, #6e1f7c)",
    },
    {
      name: "Rath",
      img: "/images/slider3.png",
      description:
        "A tiger-like alien with unmatched strength and ferocity. " +
        "Rath is covered in orange fur with black stripes, sharp claws, and a muscular build that makes him a fearsome close-combat fighter. " +
        "He is extremely hot-headed and rushes into battle without hesitation, often relying on brute force over strategy. " +
        "Despite his reckless nature, Rath’s durability and power allow him to overpower most opponents in hand-to-hand combat. " +
        "His personality is loud, aggressive, and confrontational, but underneath the rage lies a heroic drive to protect those in need.",
      background: "linear-gradient(135deg, #2c0a0a, #ff6600)",
    },
    {
      name: "Jetray",
      img: "/images/slider7.png?v=3",
      description:
        "A Ray-like alien capable of flying at supersonic speeds. " +
        "Jetray is built for speed and aerial combat, easily outmaneuvering enemies in the air or underwater. " +
        "He can shoot powerful neuroshock blasts from his eyes and tail, stunning opponents instantly. " +
        "His aerodynamic body allows him to glide effortlessly, and his durability lets him withstand high-speed impacts. " +
        "Jetray is the go-to alien when Ben needs to chase down a fleeing foe or travel long distances in seconds.",
      background: "linear-gradient(135deg, #cc0000, #ffcc00)",
    },
    {
      name: "Brainstorm",
      img: "/images/slider8.png?v=3",
      description:
        "A highly intelligent crustacean alien with electrokinetic powers. " +
        "Brainstorm possesses an IQ that far exceeds typical human limits, allowing him to solve complex problems instantly. " +
        "He can generate massive electrical storms from his exposed brain, shocking enemies with precision lightning strikes. " +
        "His hard shell provides decent protection, but his true strength lies in his mind and strategic planning. " +
        "Brainstorm often analyzes his opponents' weaknesses before engaging, making him a formidable tactical fighter.",
      background: "linear-gradient(135deg, #ff9900, #333333)",
    },
    {
      name: "Spidermonkey",
      img: "/images/slider9.png?v=3",
      description:
        "A four-armed, monkey-like alien with incredible agility. " +
        "Spidermonkey is a master of acrobatics, able to scale walls and dodge attacks with ease. " +
        "He can shoot strong, sticky webs from his tail to trap enemies or swing across the city. " +
        "Though not the strongest alien physically, his speed and unpredictability make him hard to hit. " +
        "Spidermonkey uses his environment to his advantage, often outsmarting stronger foes with quick thinking and reflexes.",
      background: "linear-gradient(135deg, #0033cc, #00cc00)",
    },
    {
      name: "Goop",
      img: "/images/slider10.png?v=3",
      description:
        "A polymorph alien made of living slime controlled by an anti-gravity projector. " +
        "Goop can shape-shift, stretch, and squeeze through tight spaces, making him immune to most physical attacks. " +
        "His acidic slime can melt through metal and other materials, making him dangerous in close quarters. " +
        "The anti-gravity projector allows him to fly and manipulate his body in defiance of gravity. " +
        "Goop's versatility makes him excellent for infiltration, escape, and unpredictable combat tactics.",
      background: "linear-gradient(135deg, #00cc00, #66ff66)",
    },
    {
      name: "Alien X",
      img: "/images/slider11.png?v=3",
      description:
        "A celestial being with omnipotent powers, capable of warping reality itself. " +
        "Alien X is the most powerful alien in Ben's arsenal, possessing the ability to change time, space, and matter at will. " +
        "His body is as durable as the universe, and he can exist in the vacuum of space. " +
        "However, accessing his power requires the consensus of his internal personalities, Bellicus and Serena, making him difficult to control. " +
        "When active, Alien X is unstoppable, a god-like entity that can end battles with a mere thought.",
      background: "linear-gradient(135deg, #000000, #0a0a2a)",
    },
    {
      name: "Lodestar",
      img: "/images/slider12.png?v=3",
      description:
        "A magnetic alien capable of controlling metal with ease. " +
        "Lodestar can generate powerful magnetic fields to repel attacks, levitate metallic objects, or crush enemies. " +
        "His floating metal head can regenerate if destroyed, making him surprisingly durable. " +
        "He can emit magnetic pulses that disrupt electronics and stun opponents. " +
        "Lodestar is the master of magnetism, turning the environment into a weapon wherever metal is present.",
      background: "linear-gradient(135deg, #333333, #ffcc00)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [index]); // Re-run effect when index changes to reset interval (optional, but good for consistent timing)

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % aliens.length);
  };

  return (
    <div
      className="slider"
      id="aliens"
      style={{ background: aliens[index].background }}
    >
      <div className="slider-images">
        {aliens.map((alien, i) => {
          const offset = (i - index + aliens.length) % aliens.length;
          let x = 0,
            y = 0,
            scale = 1,
            opacity = 1,
            blur = "none",
            zIndex = 1;

          if (offset === 0) {
            x = 0;
            y = 0;
            scale = 1.4;
            opacity = 1;
            blur = "none";
            zIndex = 3;
          } else if (offset === 1) {
            x = 450;
            y = -90;
            scale = 0.95;
            opacity = 0.4;
            blur = "blur(3px)";
            zIndex = 2;
          } else if (offset === aliens.length - 1) {
            x = -450;
            y = 200;
            scale = 0.65;
            opacity = 0.4;
            blur = "blur(6px)";
            zIndex = 2;
          } else {
            x = 0;
            y = 0;
            scale = 0.9;
            opacity = 0;
            blur = "blur(10px)";
            zIndex = 0;
          }

          return (
            <img
              key={i}
              src={alien.img}
              alt={alien.name}
              className="alien-img"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex,
              }}
            />
          );
        })}
      </div>

      <div className="slider-info-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="slider-info"
            custom={direction}
            initial={{ y: direction === "next" ? -80 : 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === "next" ? 80 : -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h1>{aliens[index].name}</h1>
            {aliens[index].description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Controls removed for auto-scroll */}
        <div className="slider-dots">
          {aliens.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
