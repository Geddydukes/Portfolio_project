import React from "react";

const Resume = () => {
  return (
    <div className="resumePage">
      <section className="homeSection1">
        <div className="devSkills">
          <h3>Developer Skills</h3>
          <span>
            <bold>Languages & Frameworks: </bold>
            HTML, CSS, Javascript, Express, jQuery, Django, React, Node
          </span>
          <br></br>
          <span>
            <bold>Management & Deployment: </bold>
            Github, Git, Command Line, Heroku
          </span>
          <br></br>
          <span>
            <bold>Databases: </bold>
            PSQL, MongoDB
          </span>
          <br></br>
          <span>
            <bold>Methodologies: </bold>
            Object Oriented Programming, MVC Pattern, User Stories, Functional
            Programming
          </span>
          <br></br>
        </div>
      </section>
      <section className="homeSection2">
        {" "}
        <div className="proExperience">
          <h3>Professional Experience</h3>
          <span>
            <bold>Private Client Banker, JPMorgan Chase & Co; 8/19-3/20 </bold>
            <br></br>
            Analyzed complex financial information and distilling it into easy
            to understand recommendations and educating them on sound financial
            policy.
          </span>
          <br></br>
          <span>
            <bold>Financial Representative, Northwestern Mutual; </bold>
            <br></br>
            Analyzed complex information and distilling it into easy to
            understand recommendations and educating them on sound financial
            policy with a focus towards risk mitigation
          </span>
          <br></br>
          <span>
            <bold>Consultant, Dorjil company;</bold>
            <br></br>
            Performed & Analyzed market research & developed a marketing plan
            and Delivered these insights to the key stakeholders.
          </span>
          <br></br>
          <span>
            <bold>Consultant, Altered Art Studios; </bold>
            <br></br>
            Performed Market research and Helped with graphic design/ logo
            design.
          </span>
          <br></br>
        </div>
      </section>
      <section className="homeSection4">
        <div className="education">
          <h3>Education</h3>
          <span>
            <bold>General Assembly Software Engineering Fellow:</bold>
            <br />A 550 hour fellowship where we study all aspects of full stack
            development. Here I built full stack web applications in 2 languages
            and 3 frameworks. The most important skill they helped hone was the
            ability to learn but also to teach yourself.
          </span>
          <br></br>
          <span>
            <bold>Santa Rosa Junior College:</bold>
            <br /> Completed coursework in marketing, sales, advirtisement,
            entrpeneurship and religious studies.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Resume;
