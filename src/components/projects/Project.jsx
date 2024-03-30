import React, { useState } from "react";
import Modal from "./Modal";

const Project = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="project" onClick={() => setOpenModal(true)}>
      <img src={project.image.url} alt="project" />
      <h2> {project.title}</h2>
      <Modal open={openModal} project={project} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Project;
