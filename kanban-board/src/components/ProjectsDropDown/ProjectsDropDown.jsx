import React from "react";
import { X } from "react-feather";
import Links from "../Links/Links";
import "./ProjectsDropDown.scss";

function ProjectsDropDown({ setShowDropDown }) {
  return (
    <div className="modal">
      <div className="modal-card px-0">
        <p>ALL BOARDS</p>
        <div
          className="modal-card-close-btn"
          onClick={() => {
            setShowDropDown(false);
          }}
        >
          <X />
        </div>

        <Links />
      </div>
    </div>
  );
}

export default ProjectsDropDown;
