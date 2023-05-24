import React from "react";

export default function BtnPrimary(props) {
  return (
    <a
      className="btn btn-secondary link-text-dec-none"
      href={props.link}
      onClick={() => props.handleClick()}
    >
      {props.content}
    </a>
  );
}
