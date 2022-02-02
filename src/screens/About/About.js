import React, { useState } from "react";
import "./About.css";

const profile = require("../../assets/profile.jpeg");

const stack = [
  {
    name: "HTML",
    icon: require("../../assets/html.png"),
  },
  {
    name: "CSS",
    icon: require("../../assets/css.png"),
  },
  {
    name: "SQL",
    icon: require("../../assets/sql.png"),
  },
  {
    name: "Figma",
    icon: require("../../assets/figma.png"),
  },
];

export const About = () => {
  const [isStackVisible, setStackVisible] = useState(false);
  const [stackTitle, setStackTitle] = useState("This is my tech stack");
  const [stackDescription, setStackDescription] = useState(
    "Hover an icon to see more"
  );

  return (
    <div className="container">
      {!isStackVisible ? (
        <div>
          <img src={profile} className="profile" />
          <div className="description  fade-in">
            I'm a <span className="highlight">software engineer </span>
            currently working as a mobile developer. I am really passionate
            about the frontend development and the UI designing.
          </div>
          <button
            className="button  fade-in"
            onClick={() => {
              setStackVisible("stack");
            }}
          >
            Tech stack
          </button>
        </div>
      ) : (
        <div className="stack fade-in">
          <h2 className="title">{stackTitle}</h2>
          <div className="stack-icons">
            {stack.map((item) => {
              return (
                <img
                  key={item.name}
                  src={item.icon}
                  className="icon m-10"
                  onMouseEnter={() => {
                    setStackTitle(item.name);
                  }}
                />
              );
            })}
          </div>
          <div className="description">{stackDescription}</div>
        </div>
      )}
    </div>
  );
};
