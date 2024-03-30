import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";
import "./Skills.css";
import { Skill } from "./Skill";
import { motion } from "framer-motion";
const Skills = ({ data }) => {
  return (
    <div className="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills <HiChevronDoubleDown />
      </motion.div>
      <ul className="skill-list">
        {data.skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Skill skill={skill} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
