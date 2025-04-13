import React from "react";
import "./about.css";
import Jump from "react-reveal/Jump";
import ProfilePic from '../../assets/Images/ProfilePic.png';

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={ProfilePic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               I’m a <strong>MEAN Stack Developer</strong> with 4 years of experience in building scalable and efficient web applications. Currently, I’m working on an Ad-Tech project at Cognizant, where I design and implement innovative solutions to optimize digital advertising workflows.

               My expertise lies in <strong>MongoDB, Express.js, Angular, Node.js</strong>, and other modern web technologies. I have also contributed to open-source projects, including an <strong>Restaurant Management Platform</strong> and a <strong>Hackathon project for my client</strong>.

               Beyond coding, I enjoy solving complex problems, improving application performance, and staying updated with the latest advancements in web development. Let’s connect and create impactful solutions together! 🚀
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;