import React from "react";
import "./Projects.css";
import DynamicForm from '../../assets/Images/DynamicForm.webp';

const Projects = () => {
  return (
    <div className="project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Top Recent Projects
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Here are some of my latest projects, showcasing my expertise in full-stack development.
      </p>

      <div className="row" id="ads">
          {/* E-Commerce Project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="E-Commerce Project"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Angular</span>
                <span className="card-detail-badge">Express.js</span>
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">Restaurant Management Website</h6>
                <p>
                A full-stack <strong>E-commerce platform</strong> built using the <strong>MEAN</strong> stack, allowing users to browse, purchase, and manage orders seamlessly. The platform supports <strong>secure payments, real-time order tracking</strong>, and an <strong>intuitive user experience</strong> .
                </p>
                <a className="ad-btn" href="https://github.com/SumanthKaranam/Project">GitHub</a>
                {/* <a className="ad-btn" href="https://buyit-851q.onrender.com">Live Demo</a> */}
              </div>
            </div>
          </div>

          {/* Dynamic Form Builder Project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Dynamic Form Builder</span>
                <img
                  src={DynamicForm}
                  alt="Dynamic Form Builder"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Angular</span>
                <span className="card-detail-badge">TypeScript</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">Dynamic Form Builder</h6>
                <p>
                A feature-rich <strong>Dynamic Form Builder</strong> application built using <strong>Angular</strong>. It allows users to create, customize, and manage forms with <strong>drag-and-drop functionality</strong>, real-time preview, and validation support. Designed for scalability and ease of use.
                </p>
                <a className="ad-btn" href="https://github.com/SumanthKaranam/Dynamic-form-builder">GitHub</a>
                {/* <a className="ad-btn" href="https://dynamic-form-builder-demo.com/">Live Demo</a> */}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
