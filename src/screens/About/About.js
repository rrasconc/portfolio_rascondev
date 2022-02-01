import React, { useState } from "react";
import "./About.css";

const profile = require("../../assets/profile.jpeg");

export const About = () => {
  const [isStackVisible, setStackVisible] = useState(false);

  return (
    <div>
      <div className="screen">
        {!isStackVisible ? (
          <div className="container fade-in">
            <img src={profile} className="profile" />
            <div className="description">
              I am a <span className="highlight">software engineer </span>
              currently working as a mobile developer. I am really passionate
              about the frontend development and the UI designing.
            </div>
            <button
              className="button"
              onClick={() => {
                setStackVisible("stack");
              }}
            >
              Tech stack
            </button>
          </div>
        ) : (
          <div className="container fade-in">
            <div className="description">This is my tech stack</div>
          </div>
        )}
      </div>
    </div>
  );
};
