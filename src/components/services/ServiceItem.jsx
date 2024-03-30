import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const ServiceItem = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="service-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTap={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="service"
        style={{ filter: isHovered ? "blur(5px)" : "none" }}
      >
        <img src={service.image.url} alt={service.name} />
      </motion.div>
      {isHovered && (
        <motion.div
          className="service-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{service.name}</h3>
          <p>{service.desc}</p>
          <p
            style={{
              paddingTop: "10px",
              fontSize: "25px",
              fontFamily: "unbounded",
            }}
          >
            <strong> {service.charge} </strong>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceItem;
