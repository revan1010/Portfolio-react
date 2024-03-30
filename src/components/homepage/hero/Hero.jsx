import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
const Hero = ({ data }) => {
  //   const hero = data.about.avatar.url;
  //   return (
  //     <div className="content">
  //       <div className="title-part">
  //         <div className="hero-name">
  //           <h3> Hello, my name is </h3>
  //           <h1> {data.about.name} </h1>
  //           <h2>
  //             I am <span className="hero-title"> {data.about.title} </span>
  //           </h2>
  //         </div>

  //         <div className="subtitle">
  //           <p>
  //             From {data.about.address}. {data.about.subTitle}{" "}
  //           </p>
  //         </div>
  //       </div>
  //       <div className="hero-img">
  //         <img src={hero} alt="" />
  //         <div class="info-list">
  //           <ul>
  //             <li>
  //               <span class="num">
  //                 {data.about.exp_year} <strong>+</strong>
  //               </span>
  //               <span class="value">
  //                 Years of <strong>Experience</strong>
  //               </span>
  //             </li>
  //             <li>
  //               <span class="num">15</span>
  //               <span class="value">
  //                 Completed <strong>Projects</strong>
  //               </span>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
  const hero = data.about.avatar.url;

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title-part">
        <div className="hero-name">
          <h3> Hello, my name is </h3>
          <h1> {data.about.name} </h1>
          <h2>
            I am <span className="hero-title"> {data.about.title} </span>
          </h2>
        </div>
        <div className="subtitle">
          <p>
            From {data.about.address}. {data.about.subTitle}{" "}
          </p>
        </div>
      </div>

      <div className="hero-img">
        {/* <motion.img
          src={hero}
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        /> */}
        <motion.img
          src={hero}
          alt=""
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          whileHover={{ scale: 1.2 }} // Tilting effect on hover
        />
        <div className="info-list">
          <ul>
            {data.about.exp_year && (
              <motion.li
                animate={{
                  y: [8, -8, 8],
                  transition: { duration: 3, repeat: Infinity },
                }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <span className="num">
                  {data.about.exp_year} <strong>+ </strong>
                </span>
                <span className="value">Years of </span>

                <strong>Experience</strong>
              </motion.li>
            )}
            <motion.li
              animate={{
                y: [-10, 10, -10],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              <span className="num">{data.about.some_total} </span>
              <span className="value">Completed </span>

              <strong>Projects</strong>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
