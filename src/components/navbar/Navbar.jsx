import React from "react";
import "./Navbar.css";
import Sidebar2 from "../sidebar/Sidebar2";
import { motion } from "framer-motion";
const Navbar = ({ data }) => {
  const dataImage = data.social_handles;

  return (
    <div className="navbar">
      <div className="wrapper">
        <span> John Doe </span>
        <div className="social">
          {dataImage.map((item) => (
            <a href="#" key={item.id}>
              <motion.img
                whileHover={{ scale: 1.5 }}
                src={item.image.url}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
