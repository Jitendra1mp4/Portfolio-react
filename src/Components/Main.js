import ArticleBlog from "./Sections/ArticleBlog";
import SectionHome from "./Sections/SectionHome";
import SectionProject from "./Sections/SectionProject";
import SectionSkills from "./Sections/SectionSkills";

function Main(props) {
  switch (props.currentPage) {
    case "/home":
      return (
        <main>
          <SectionSkills />
          {props.sectionListArray[0].map((section, index) => {
            return (
             <SectionHome
             key={index}
             index={index}
             heading={section.sectionHeading}
             para={section.sectionPara}
             btnPrimary={section.sectionBtn.primary}
             updatePage={props.updatePage}
             />
            );
          })}
        </main>
      );
    case "/projects":
      return (
        <main>
          {props.sectionListArray[1].map((section, index) => {
            return (
              <SectionProject
                key={index}
                index={index}
                heading={section.sectionHeading}
                para={section.sectionPara}
                btnPrimary={section.sectionBtn.primary}
                btnSecondary={section.sectionBtn.secondary}
              />
            );
          })}
        </main>
      );
    case "/blogs":
      return (
        <main>
          {props.sectionListArray[2].map((section, index) => {
            return (
              <ArticleBlog
                key={index}
                index={index}
                heading={section.sectionHeading}
                para={section.sectionPara}
                btnPrimary={section.sectionBtn.primary}
              />
            );
          })}
        </main>
      );
    default:
      return <SectionSkills />;
  }
}

export default Main;
