import React, { useState } from "react";
import "./Navbar.css";
import { theme } from "../../assets/theme";

const sections = [
  {
    section: "about",
    icon: require("../../assets/user.png"),
  },
  {
    section: "portfolio",
    icon: require("../../assets/briefcase.png"),
  },
  {
    section: "contact",
    icon: require("../../assets/agenda.png"),
  },
];

export const Navbar = (props) => {
  return (
    <div className="menu">
      {sections.map((item) => {
        return (
          <button
            style={
              props.selectedItem === item.section
                ? { backgroundColor: theme.secondary }
                : { backgroundColor: theme.dark }
            }
            href={item.section}
            onClick={() => props.handlePress(item.section)}
            className="item"
            key={item.section}
          >
            <img src={item.icon} className="icon" />
          </button>
        );
      })}
    </div>
  );
};
