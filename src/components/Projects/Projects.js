import React from "react";
import "./Projects.css";
import { theme } from "../../assets/theme";

const projects = [
  {
    name: "Color Palette",
    url: "",
    repository: "",
  },
  {
    name: "ma-graphicstudio",
    url: "",
    repository: "",
  },
  {
    name: "remind me",
    url: "",
    repository: "",
  },
  {
    name: "Mood Tracker",
    url: "",
    repository: "",
  },
  {
    name: "College Football Api",
    url: "",
    repository: "",
  },
];

export const Projects = (props) => {
  return (
    <div className="container fade-in">
      {projects.map((project) => {
        return (
          <span
            className="project"
            style={
              props.selectedProject === project.name
                ? { backgroundColor: theme.secondary }
                : { backgroundColor: theme.dark }
            }
            onClick={() => props.handlePress(project.name)}
            key={project.name}
          >
            {project.name}
          </span>
        );
      })}
    </div>
  );
};
