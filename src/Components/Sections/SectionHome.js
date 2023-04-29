import React from "react";

export default function SectionHome(props) {
  const getLink = () => (props.index === 0 ? "/projects" : "/blogs");

  return (
    <section
      className={props.index % 2 === 0 ? "antique-light" : "section-off-white"}
    >
      <div className="container-center">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>

        <a
          className={`btn btn-${props.index === 0 ? "primary" : "secondary"} link-text-dec-none`}
          
          onClick={() => props.updatePage(getLink, props.index + 1)}
        >
          {props.btnPrimary.content}
        </a>
      </div>
    </section>
  );
}
