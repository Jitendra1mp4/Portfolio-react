import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary.js";
export default function articleBlog(props) {
  return (
    <article
      className={props.index % 2 === 0 ? "antique-light" : "section-off-white"}
    >
      <div className="container-center">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <BtnPrimary
          link={props.btnPrimary.link}
          content={props.btnPrimary.content}
        />
      </div>
    </article>
  );
}
