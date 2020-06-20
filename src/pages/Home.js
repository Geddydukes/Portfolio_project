import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <section className="homeSection1">
        <span>
          <img
            src={require("../images/face-pic.JPG")}
            alt="GeddyDukes"
            className="homeFace"
          ></img>
          <article className="introductory-body">
            Hi my name is Geddy Dukes, I am a junior engineer with full stack
            skills. I currently trained in Javascript, where I have utilized
            MEN, MERN stacks and Electron, and Python where I have utilized
            Django to create full stack web applications.
          </article>
        </span>
      </section>
      <section className="homeSection2">This is section two</section>
      <section className="homeSection3">This is section three</section>
    </div>
  );
};

export default Home;
