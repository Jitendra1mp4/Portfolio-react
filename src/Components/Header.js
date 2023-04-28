import React from "react";

export default function Header(props) {
  return (
    <header>
      <img className="hero-img" src={props.headerImage} alt="hero-image" />
      <h1 className="hero-text">
        {/* Hi, I am Jitendra a <span className="hero-name">Web-Developer</span> */}
        {props.headerText}
      </h1>

    </header>
  );
}
