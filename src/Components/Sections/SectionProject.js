import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecondary from "../Buttons/BtnSecondary";

export default function SectionProject(props) {
  return (
    <section
      className={props.index % 2 === 0 ? "antique-light" : "section-off-white"}
    >
      <div className="container-center">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <BtnPrimary
          link={props.btnPrimary.link}
          content={props.btnPrimary.content}
        />
        <span className="m-hf">
          <BtnSecondary
            link={props.btnSecondary.link}
            content={props.btnSecondary.content}
          />
        </span>
      </div>
    </section>
  );
}
