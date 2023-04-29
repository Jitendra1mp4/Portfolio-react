import React from "react";

export default function SectionProject(props) {
  return (
    <section
      className={props.index % 2 === 0 ? "antique-light" : "section-off-white"}
    >
      <div className="container-center">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <a
          className="btn btn-primary link-text-dec-none"
          href={props.btnPrimary.link}
        >
          {props.btnPrimary.content}
        </a>
        <a
          className="btn btn-secondary link-text-dec-none my-hf"
          href={props.btnSecondary.link}
        >
          {props.btnSecondary.content}
        </a>
      </div>
    </section>
  );
}
