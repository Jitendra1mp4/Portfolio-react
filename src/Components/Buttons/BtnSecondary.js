import React from "react";

export default function BtnSecondary(props) {
  return (
    <a
      className="btn btn-secondary link-text-dec-none"
      href={props.link}
      onClick={() =>
        props.handleClick !== undefined ? props.handleClick() : undefined
      }
    >
      {props.content}
    </a>
  );
}
