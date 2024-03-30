import React, { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";
import "./Projects.css";
import Project from "./Project";

const Projects = ({ data }) => {
  const [projects, setProjects] = useState(
    data.projects.sort((a, b) => a.sequence - b.sequence)
  );

  return (
    <div className="projects">
      <div className="projects-header">
        Projects <HiChevronDoubleDown />
      </div>
      <ul className="project-list">
        {projects.map((item) => {
          return (
            <li key={item.sequence}>
              <Project project={item}></Project>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
