import React from "react";
import "./Modal.css";
import { GiAerialSignal } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ open, project, setOpenModal }) => {
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setOpenModal(false);
    console.log("Modal closed");
  };

  return open ? (
    <div onClick={handleCloseModal} className="overlay">
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        {/* <button type="button" onClick={handleCloseModal}>
          X
        </button> */}
        <img src={project.image.url} alt="" />
        <div className="modal-title">
          <h1>{project.title}</h1>
        </div>
        <div className="modal-stack">
          {project.techStack.map((stack) => (
            <p key={stack}>{stack}</p>
          ))}
        </div>

        <div className="button-3">
          <button>
            Live url <GiAerialSignal />
          </button>
          <button>
            Github <FaGithub />
          </button>
          <button onClick={handleCloseModal}>
            Close <IoIosCloseCircleOutline />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
