import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
<div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "#1e1e2c",
              maxWidth: "600px", // Adjusted width for better readability
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Oct 2021 - Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff", fontSize: "20px" }} // Reduced icon size
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cognizant Technology Solutions India Pvt Ltd, Hyderabad, India
            </h4>
            <p style={{ textAlign: "left", lineHeight: "1.6" }}> 
              - <strong>Developed and maintained Single Page Applications (SPA)</strong> using Angular and TypeScript, ensuring optimized performance and scalability.  
              <br /> <br />
              - <strong>Designed and implemented responsive UI components</strong> using Material-UI, Bootstrap, and SCSS, enhancing user engagement.  
              <br /> <br />
              - <strong>Integrated and optimized RESTful API endpoints</strong>, ensuring efficient and secure data fetching.  
              <br /> <br />
              - <strong>Implemented state management solutions</strong> using NgRx, improving performance and data consistency.  
              <br /> <br />
              - <strong>Developed and executed unit tests</strong> using Jest, Mocha, and Jasmine, ensuring high test coverage.  
              <br /> <br />
              - Worked with <strong>CI/CD pipelines</strong> (GitHub Actions, Jenkins) to automate build, testing, and deployment.  
              <br /> <br />
              - Participated in Agile development processes, attending sprint planning, stand-ups, and retrospectives to ensure smooth project execution.  
              <br /> <br />
              - Conducted code reviews and refactored code to follow <strong>SOLID principles</strong> for better maintainability and scalability.  
              <br /> <br />
              - <strong>Implemented authentication and security measures</strong> using JWT, OAuth, and Firebase Authentication, ensuring secure user access.  
              <br /> <br />
              - Collaborated with cross-functional teams to improve the product design.  
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
