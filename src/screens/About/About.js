import React, { useState } from "react";
import "./About.css";

const profile = require("../../assets/profile.jpeg");

const stack = [
  {
    name: "React",
    icon: require("../../assets/stack/react.png"),
    description: (
      <span>
        <span>
          I've used React.js and React-Native to
          <span className="highlight"> develop </span> most of my project's
          frontend
        </span>
      </span>
    ),
  },
  {
    name: "Django",
    icon: require("../../assets/stack/django.png"),
    description: (
      <span>
        <span>
          Django has been my favorite web framework to
          <span className="highlight"> manage </span> the backend of my
          projects, mostly creating REST APIS to connect my frontend to a
          database
        </span>
      </span>
    ),
  },
  {
    name: "HTML",
    icon: require("../../assets/stack/html.png"),
    description: (
      <span>
        <span>
          I can use my advanced knowledge of HTML to
          <span className="highlight"> build </span> the structure of a website
        </span>
      </span>
    ),
  },
  {
    name: "CSS",
    icon: require("../../assets/stack/css.png"),
    description: (
      <span>
        <span>
          I can <span className="highlight">translate </span> web design
          prototypes into a readable and really organized css code
        </span>
      </span>
    ),
  },
  {
    name: "Figma",
    icon: require("../../assets/stack/figma.png"),
    description: (
      <span>
        <span>
          Figma has been my main tool to
          <span className="highlight"> design </span> the UI prototype for most
          of my web and mobile projects
        </span>
      </span>
    ),
  },
];

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isStackVisible, setStackVisible] = useState(false);
  const [stackTitle, setStackTitle] = useState("This is my tech stack");
  const [stackDescription, setStackDescription] = useState(
    "Hover an icon to see more"
  );

  const handleStackOnHover = (tech) => {
    setStackTitle(tech.name);
    setStackDescription(tech.description);
  };

  return (
    <div className="container">
      {!isStackVisible ? (
        <div>
          <img
            src={profile}
            className={isLoading ? "profile" : "profile fade-in"}
            style={{ visibility: isLoading ? "hidden" : "visible" }}
            onLoad={() =>
              setTimeout(() => {
                setIsLoading(false);
              }, 300)
            }
          />
          <div className="description  line-up">
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
                    handleStackOnHover(item);
                  }}
                />
              );
            })}
          </div>
          <div key={Math.random()} className="description line-up">
            {stackDescription}
          </div>
        </div>
      )}
    </div>
  );
};
