import React from "react";

function Footer() {
    return (
      <footer className="container-fluid">
      <div className="container-center">
        <span className="brand clr-light">Jitendra Kumar Sahu</span>
        <span className="my-1 clr-light d-block">
          Social Links
        </span>
        <ul className="list-no-bullet list-social-links">
          <li className="list-item-inline">
            <a className="link-text-dec-none link-social" href="https://www.instagram.com/jit2endra/">Instagram</a>
          </li> |
          <li className="list-item-inline">
            <a className="link-social link-text-dec-none" href="https://www.linkedin.com/in/jitendra1mp4/">Linkedin</a>
          </li> |
          <li className="list-item-inline"> <a className="link-social link-text-dec-none"
              href="https://github.com/jitendra1mp4">Github</a>
          </li>
        </ul>
      </div>
    </footer>
      
    ) ;
}

export default Footer ;