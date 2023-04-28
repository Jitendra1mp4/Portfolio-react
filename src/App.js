import React, { useState } from "react";
import "./App.css";
import "./utility.css"; // by jitendra
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import homeImage from "./Images/home.svg";
import blogsImage from "./Images/blogs.svg";
import projectsImage from "./Images/projects.svg";

function App() {
  const appName = "Jitendra Kumar";
    const _navPills = [
    {
      value: "Home",
      link: "/home",
      active: true,
    },
    {
      value: "Projects",
      link: "/projects",
      active: false,
    },
    {
      value: "Blogs",
      link: "/blogs",
      active: false,
    },
  ];

  const headerTextList = [
    () => (
      <>
        Hi, I am Jitendra a <span className="hero-name">Web-Developer</span>
      </>
    ),
    () => (
      <>
        here my <span className="hero-name">Projects</span> are.
      </>
    ),
    () => (
      <>
        My <span className="hero-name">Blogs </span>😍.
      </>
    ),
  ];

  const [mode, setMode] = useState("light");
  const [navPills, setNavPills] = useState(_navPills);
  const [headerImage, setHeaderImage] = useState(homeImage);
  const [headerText, setHeaderText] = useState(headerTextList[0]());
  const setActiveLink = (link) => {
    let newNavPills = [...navPills];
    //set active link
    for (const index in newNavPills) {
      newNavPills[index].active = newNavPills[index].link === link;
    }
    setNavPills(newNavPills);
  };

  const setNewHeaderImage = (link) => {
    switch (link) {
      case "/home":
        setHeaderImage(homeImage);
        break;

      case "/blogs":
        setHeaderImage(blogsImage);
        break;

      case "/projects":
        setHeaderImage(projectsImage);
        break;
    }
  };
  const setNewHeaderText = (index) => {
    setHeaderText(headerTextList[index]());
  };

  return (
    <React.Fragment>
      <Navbar
        appName={appName}
        navPills={navPills}
        setLink={setActiveLink}
        setNewHeaderImage={setNewHeaderImage}
        setNewHeaderText={setNewHeaderText}
      />

      <Header headerImage={headerImage} headerText={headerText} />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
