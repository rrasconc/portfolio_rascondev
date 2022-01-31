import React from "react";
import "./Home.css";

const aboutIcon = require("../assets/user.png");
const portfolioIcon = require("../assets/briefcase.png");
const contactIcon = require("../assets/agenda.png");

export const Home = () => {
  return (
    <div className="screen">
      <div className="container">
        <h2 className="header">RIGOBERTO RASCON</h2>
        <h2 className="sub header">SOFTWARE DEVELOPER</h2>
      </div>
      <div className="menu">
        <a href="#">
          <img src={aboutIcon} className="icon" />
        </a>
        <a href="#">
          <img src={portfolioIcon} className="icon" />
        </a>
        <a href="#">
          <img src={contactIcon} className="icon" />
        </a>
      </div>
    </div>
  );
};
