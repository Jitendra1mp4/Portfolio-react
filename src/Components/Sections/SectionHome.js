import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecondary from "../Buttons/BtnSecondary";
export default function SectionHome(props) {
  const getLink = () => (props.index === 0 ? "/projects" : "/blogs");
  const switchPage = () => props.updatePage(getLink());
  const setBtn = () => {
    if (getLink() === "/projects") {
      return (
        <BtnPrimary
          link={`#${getLink().slice(1)}`}
          handleClick={switchPage}
          content={props.btnPrimary.content}
        />
      );
    } else {
      return (
        <BtnSecondary
          link={`#${getLink().slice(1)}`}
          handleClick={switchPage}
          content={props.btnPrimary.content}
        />
      );
    }
  };

  return (
    <section
      className={props.index % 2 === 0 ? "antique-light" : "section-off-white"}
    >
      <div className="container-center">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        {setBtn()}
      </div>
    </section>
  );
}
