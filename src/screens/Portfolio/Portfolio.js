import React, { useState } from "react";
import { Projects } from "../../components/Projects/Projects";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState("");
  return (
    <div className="container">
      <Projects
        selectedProject={selectedProject}
        handlePress={(item) => setSelectedProject(item)}
      />
    </div>
  );
};
