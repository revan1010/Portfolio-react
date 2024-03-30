import React from "react";
import "./Hero.css";
export const Hero = ({ data }) => {
  const hero = data.about.avatar.url;
  return (
    <div className="content">
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
        <img src={hero} alt="" />
        <div class="info-list">
          <ul>
            <li>
              <span class="num">
                {data.about.exp_year} <strong>+</strong>
              </span>
              <span class="value">
                Years of <strong>Experience</strong>
              </span>
            </li>
            <li>
              <span class="num">15</span>
              <span class="value">
                Completed <strong>Projects</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
