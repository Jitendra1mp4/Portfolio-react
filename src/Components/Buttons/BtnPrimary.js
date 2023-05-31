import React from "react";

export default function BtnPrimary(props) {
  return (
    <a
      className="btn btn-primary link-text-dec-none"
      href={props.link}
      onClick={() =>
        props.handleClick !== undefined ? props.handleClick() : undefined
      }
    >
      {props.content}
    </a>
  );
}
