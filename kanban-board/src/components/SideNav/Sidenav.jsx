import React from "react";
import "./Sidenav.scss";
import { useProject } from "../../context/ProjectContex";
import Links from "../Links/Links";

function Sidenav() {
  const { projects } = useProject();

  return (
    <div className="sidenav">
      <p>ALL BOARDS ({projects.length})</p>
      <Links />
    </div>
  );
}

export default Sidenav;
