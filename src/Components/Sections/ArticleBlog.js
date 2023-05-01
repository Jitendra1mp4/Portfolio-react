import React from "react";

export default function articleBlog(props) {
  return (
    <article
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
      </div>
    </article>
  );
}
