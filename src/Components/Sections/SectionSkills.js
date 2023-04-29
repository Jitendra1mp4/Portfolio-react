import React from 'react'

export default function SectionSkills() {
  return (
    <section className="section-off-white ">
    <div className="container-center container-section">
      <h2>Technologies</h2>
      <p>
        I am familiar with following Technologies-
      </p>
      <ul className="list-techs list-no-bullet">
        <li className="list-item-techs">Web-Development <br />
          <span className="spn-skills">
            HTML5, CSS3, JS, PHP core
            etc.</span>
        </li>
        <li className="list-item-techs">Other Technologies <br />
          <span className="spn-skills"> Java, C++, C, Shell, VB.NET, Linux etc.</span>
        </li>
        <li className="list-item-techs">Dev-Tools <br />
          <span className="spn-skills">Git, Github, Visual Studio Code etc.</span>
        </li>
      </ul>
    </div>
  </section>
  
  )
}
