import React from "react";
import "./App.css";
import "./utility.css" // by jitendra
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const navPills = ['Home','Projects','Blogs'] ;
  return (
    <React.Fragment>
      <Navbar appName="Jitendra Kumar" navPills={navPills}/>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
