import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = ({ data }) => {
  const img = data.about.avatar.url;
  const imgCpp = data.skills[0].image.url;
  const imgJS = data.skills[9].image.url;
  const imgReact = data.skills[16].image.url;
  const imgHtml = data.skills[19].image.url;
  const imgType = data.skills[4].image.url;
  const imgThree = data.skills[7].image.url;
  return (
    <div className="about-container">
      <div className="about-head">
        <h1>About Me</h1>
      </div>
      <div className="about">
        <div className="about-image-part">
          <img src={img} alt="hero" />

          {/* Framer Motion skill images */}
          <motion.div
            className="overlays-about cpp"
            animate={{
              y: [70, -20, 70],
              transition: { duration: 2, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgCpp} alt="cpp" />
          </motion.div>
          <motion.div
            className="overlays-about js"
            animate={{
              y: [0, 60, 0],
              transition: { duration: 3, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgJS} alt="js" />
          </motion.div>
          <motion.div
            className="overlays-about react"
            animate={{
              y: [-40, 40, -40],
              transition: { duration: 2, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgReact} alt="react" />
          </motion.div>
          <motion.div
            className="overlays-about html"
            animate={{
              y: [-50, 50, -50],
              transition: { duration: 3, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgHtml} alt="html" />
          </motion.div>
          <motion.div
            className="overlays-about type"
            animate={{
              y: [-39, 54, -50],
              transition: { duration: 3, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgType} alt="html" />
          </motion.div>
          <motion.div
            className="overlays-about three"
            animate={{
              y: [-40, 35, -30],
              transition: { duration: 3, repeat: Infinity },
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src={imgThree} alt="html" />
          </motion.div>
        </div>
        {/* <div className="about-data-part">
        <div className="about-info">
          <p>{data.about.description}</p>
        </div>
      </div> */}
        <div className="about-data-part">
          <div className="cicular-text">
            <svg width="200" height="200">
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="boxxx"></div>
                <textPath href="#curve" startOffset="0%">
                  Live the Life as you want
                  <animate
                    attributeName="startOffset"
                    values="100%;0%"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </textPath>
              </motion.text>
              <path
                id="curve"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                stroke="transparent"
                fill="none"
              />
            </svg>
          </div>

          <div className="about-info">
            <p>{data.about.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
