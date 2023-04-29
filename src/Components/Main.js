import SectionSkills from "./SectionSkills";

function Main(props) {
  switch (props.currentPage) {
    case "/home":
      return (
        <main>
          <SectionSkills />
          {props.sectionListArray[0].map((section, index) => {
            return (
              <section className={index%2===0?"antique-light":"section-off-white"} key={index}>
                <div className="container-center">
                  <h2>{section.sectionHeading}</h2>
                  <p>{section.sectionPara}</p>
                  <a
                    onClick={() =>
                      props.updatePage(
                        section.sectionBtn.primary.link,
                        index + 1
                      )
                    }
                    className="btn btn-primary link-text-dec-none"
                    // href="/projects.html"
                  >
                    {section.sectionBtn.primary.content}
                  </a>
                </div>
              </section>
            );
          })}
        </main>
      );
      break;
    case "/projects":
      return (
        <main>
          {props.sectionListArray[1].map((section, index) => {
            return (
              <section className={index%2===0?"antique-light":"section-off-white"} key={index}>
                <div className="container-center">
                  <h2>{section.sectionHeading}</h2>
                  <p>{section.sectionPara}</p>
                  <a
                    className="btn btn-primary link-text-dec-none"
                    href={section.sectionBtn.primary.link}
                  >
                    {section.sectionBtn.primary.content}
                  </a>
                  <a
                    className="btn btn-secondary link-text-dec-none my-hf"
                    href={section.sectionBtn.secondary.link}
                  >{section.sectionBtn.secondary.content}
                  </a>
                </div>
              </section>
            );
          })}
        </main>
      );
      break;
    case "/blogs":
      return (
        <main>
          {props.sectionListArray[2].map((section, index) => {
            return (
              <article className={index%2===0?"antique-light":"section-off-white"} key={index}>
                <div className="container-center">
                  <h2>{section.sectionHeading}</h2>
                  <p>{section.sectionPara}</p>
                  <a
                    onClick={() =>
                      props.updatePage(
                        section.sectionBtn.primary.link,
                        index + 1
                      )
                    }
                    className="btn btn-primary link-text-dec-none"
                    href={section.sectionBtn.primary.link}
                  >
                    {section.sectionBtn.primary.content}
                  </a>
                </div>
              </article>
            );
          })}
        </main>
      );
      break;
    default:
      break;
  }
}

export default Main;
