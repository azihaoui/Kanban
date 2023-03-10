import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import ProjectProvider from "./context/ProjectContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectProvider>
    <App />
  </ProjectProvider>
);
