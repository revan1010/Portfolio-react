import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
export const Skill = ({ skill }) => {
  // return (
  //   <div className="skill">
  //     <img src={skill.image.url} alt="skill" />

  //     <div className="info-part-skill">
  //       <div className="data-part1">
  //         <h1>{skill.name}</h1>
  //         <h1> {skill.percentage}%</h1>
  //       </div>
  //       <div className="data-part2">
  //         <ProgressBar
  //           completed={skill.percentage}
  //           isLabelVisible={false}
  //           bgColor={"#0e2125"}
  //           height="10px"
  //           baseBgColor="rgb(224 224 222 / 77%)"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <motion.div
      className="skill"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={skill.image.url} alt="skill" />

      <div className="info-part-skill">
        <div className="data-part1">
          <h1>{skill.name}</h1>
          <h1> {skill.percentage}%</h1>
        </div>
        <div className="data-part2">
          <ProgressBar
            completed={skill.percentage}
            isLabelVisible={false}
            bgColor={"#0e2125"}
            height="10px"
            baseBgColor="rgb(224 224 222 / 77%)"
          />
        </div>
      </div>
    </motion.div>
  );
};
