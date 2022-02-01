import React from "react";
import "./About.css";

const profile = require("../../assets/profile.jpeg");

export const About = () => {
  return (
    <div className="container">
      <img src={profile} className="profile fade-in" />
      <div className="description fade-in">
        I am a <span className="highlight">software engineer</span> currently
        working as a mobile developer. I am really passionate about the frontend
        development and the UI designing.
      </div>
    </div>
  );
};
