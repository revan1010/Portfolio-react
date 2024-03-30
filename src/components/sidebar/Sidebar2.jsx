import React from "react";
import "./Sidebar2.css";
import { useState } from "react";
// Sidebar.js

import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar2 = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: `circle(1200px at 50px 50px)`,
      transition: {
        duration: 0.7,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="sidebar2"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar2;
