import React, { useState } from "react";
import "./Navbar.css";

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

export const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("about");

  return (
    <div className="menu">
      {sections.map((item) => {
        return (
          <button
            style={
              selectedItem === item.section
                ? { backgroundColor: "#152A2D" }
                : undefined
            }
            href={item.section}
            onClick={() => {
              setSelectedItem(item.section);
            }}
            className="item"
          >
            <img src={item.icon} className="icon" />
          </button>
        );
      })}
    </div>
  );
};
