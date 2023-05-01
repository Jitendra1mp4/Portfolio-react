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
  const [currentPage,setCurrentPage] = useState("/home") ;
  const setActiveLink = (link) => {
    // create copy of navPills array.
    let newNavPills = [...navPills];
    //set active link
    for (const index in newNavPills) {
      // sets boolean wether link is active or not
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
  const updatePage = (link, index) => {
    // console.log(link);
    setActiveLink(link);
    setCurrentPage(link)
    setNewHeaderImage(link);
    setNewHeaderText(index);
    setSectionList(projectsSectionList);
  };

  const HomeSectionList = [
    {
      sectionHeading: "Projects",
      sectionPara:
        "Learning won't be useful until we have not made something useful out of it. so here I have some project created out of my learnings.",
      sectionBtn: {
        primary: {
          content: "Brows Projects",
          link: "/projects",
        },
        secondary: {
          content: "",
          link: "",
        },
      },
    },
    {
      sectionHeading: "Blogs",
      sectionPara:
        "I am also working on some technical and non technical blogs. I like to document my journey of learning.",
      sectionBtn: {
        primary: {
          content: "Read Blogs",
          link: "/blogs",
        },
      },
    },
  ];

  const projectsSectionList = [
    {
      sectionHeading: "Profit or Loss",
      sectionPara:
        "it appears to be a profit-loss calculator where you can easily check your profit/loss and its percentage just by entering your data in the respective fields",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://profit-loss-jk.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/profit-or-loss",
        },
      },
    },
    {
      sectionHeading: "Palindrome Birthday",
      sectionPara:
        "The website checks if your birth date reads the same backward and forwards. If it does, congrats, you're a palindrome baby! If not, it tells you when the next palindrome date is. It's like a digital horoscope for palindrome enthusiasts!",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://palindrome-birthday-jk.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/palindrome-birthday",
        },
      },
    },
    {
      sectionHeading: "Fun with Triangles",
      sectionPara:
        " Basically, this site is like a virtual playground for triangle enthusiasts to play around with and explore the wonderful world of three-sided shapes!",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://triangle-fun-jk.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/fun-triangle",
        },
      },
    },
    {
      sectionHeading: "Lucky Birthday",
      sectionPara:
        "Do you believe your luck can be influenced based on the your birthday date and your lucky number if yes then check if you lucky or not resulted from some mathematical calculation between them",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://lucky-birthday-jk.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/lucky-birthday",
        },
      },
    },
    {
      sectionHeading: "Currency Break",
      sectionPara:
        "It can calculate amount change for the customer with a minimum number of notes for received cash against the bill amount..",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://currency-break.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/currency-break",
        },
      },
    },
    {
      sectionHeading: "Universe Facts",
      sectionPara:
        " This is a web-app, a collection of few interesting facts about the universe, including the planets, stars, galaxies, and other celestial objects.",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://universe-fact.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/univarse-expo",
        },
      },
    },
    {
      sectionHeading: "Emoji Translate",
      sectionPara:
        "It may help you identify an emoji's name or meaning by asking you to describe it using words. This can be useful if you are trying to communicate using emojis but don't know the name or meaning of a specific one.",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://emoji-identy.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/emoji-recog",
        },
      },
    },
    {
      sectionHeading: "Minionese",
      sectionPara:
        "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://banana-tr.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/banana-talk",
        },
      },
    },
    {
      sectionHeading: "Funny Translate",
      sectionPara:
        "Are you a fan of cartoons and super heros like yoda, Have some fun with our translations. Yoda speak generator, Pirate talk generator, Pig Latin Converter and many many more.",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://funny-translate.netlify.app",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/fun-translate",
        },
      },
    },
    {
      sectionHeading: "Know Your Self Quiz",
      sectionPara:
        " How easy to find fun with yourself by asking some stupid questions to yourself!",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://replit.com/@Jitendra1mp4/funQuiz?embed=1&output=1",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/mark2-funQuiz",
        },
      },
    },
    {
      sectionHeading: "Take a honesty Survey",
      sectionPara:
        "See how simple it is to take survey online with the help of a PHP site. which also save your submitted data on the database",
      sectionBtn: {
        primary: {
          content: "Explore",
          link: "https://ansjite.000webhostapp.com/Survay/",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/survay",
        },
      },
    },
    {
      sectionHeading: "Chikmiki",
      sectionPara:
        " A simple beginner friendly C/C++ code editor/executable environment made with VB.NET . that works with the power of minGW compiler.",
      sectionBtn: {
        primary: {
          content: "Download",
          link: "https://ansjite.000webhostapp.com/Survay/",
        },
        secondary: {
          content: "See source code",
          link: "https://github.com/Jitendra1mp4/survay",
        },
      },
    },
  ];

  const blogsSectionList = [
    {
      sectionHeading: "My Random Dummy Blog",
      sectionPara:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum enim vitae doloribus! Incidunt excepturi a et nemo consequatur architecto odit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis hic ducimus est iure excepturi expedita!",
      sectionBtn: {
        primary: {
          content: "Read More",
          link: "/projects",
        },
      },
      date: {
        day: "",
        month: "",
        year: "",
      },
    },
  ];

  const sectionListArray = [HomeSectionList,projectsSectionList,blogsSectionList] ;
  const [sectionList, setSectionList] = useState(HomeSectionList);

  return (
    <React.Fragment>
      <Navbar appName={appName} navPills={navPills} updatePage={updatePage} />
      <Header headerImage={headerImage} headerText={headerText} />
      <Main updatePage={updatePage} currentPage={currentPage} sectionListArray={sectionListArray} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
