import React from "react";

export default function Header(props) {
  return (
    <header id="header">
      <img className="hero-img" src={props.headerImage} alt="hero-image" />
      <h1 className="hero-text">
        {props.headerText}
      </h1>
    </header>
  );
}
