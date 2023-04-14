import React from "react";
import heroImg from "../Images/hero.svg" ;

export default function Header() {
  return (
    <header>
      <img className="hero-img" src={heroImg} alt="hero-image" />
      <h1 className="hero-text">
        Hi, I am Jitendra a <span className="hero-name">Web-Developer</span>
      </h1>
    </header>
  );
}
