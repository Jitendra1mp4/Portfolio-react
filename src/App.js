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
  const [mode, setMode] = useState("light");
  const [headerImage, setHeaderImage] = useState(homeImage);
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
  const [navPills, setNavPills] = useState(_navPills);

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
  return (
    <React.Fragment>
      <Navbar
        appName={appName}
        navPills={navPills}
        setLink={setActiveLink}
        setNewHeaderImage={setNewHeaderImage}
      />
      <Header headerImage={headerImage} />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
