import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Organic from "../../Images/organic-rubber.png";

const organic = () => {
  return (
    <div className="page">
      <div className="container">
      <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
        ORGANIC RUBBER
        HOSES</motion.h1>
        <div className="content">

          <motion.img
            src={Organic}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />
         <motion.p
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
          Designed for low-temperature air, water, and fuel
           transfer, with material options like SBR,
          PVC/NBR, Neoprene, Vamac, and NBR for
           specific needs.
           <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Reinforcement: Polyester/Nylon (standard),
            Kevlar/Aramid (high-strength).</li>
            <li>Inner: Nitrile (oil/fuel resistant).</li>
            <li>Outer: Neoprene (weather/abrasion
              resistant).
            </li>
            <li>Variants: Reinforced (high pressure) or
            non-reinforced (low pressure).
            </li>
            <li>Extruded: Non-reinforced shapes for lowpressure use
          </li>
          </ul>
          </div>
          </motion.p>
         
          
        </div>
      </div>
    </div>
  );
  
};

export default organic;
