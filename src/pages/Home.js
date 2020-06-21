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
      <section className="homeSection2">
        <article className="myBackStory">
          Coming from a background in consulting and finance I look forward to
          continually learning, while attacking big problems and creating
          innovative solutions. My passions are many and lie in a variety of
          fields, ranging from geopolitics & history to sports marketing &
          financial technology. I’d love to dive deep and help solve the
          problems of today to create a better tomorrow.
        </article>
      </section>
      <section className="homeSection3">
        <div className="futureAmbitions">
          <article className="futureAmbitionsArticle">
            Going forward I am looking for a career at a company where I can
            make a difference; writing revolutionary code, that will help change
            lives for the better. Keeping my passions and previous experience in
            mind, I am currently seeking out roles in technology field, focusing
            on companies in the financial, marketing, international commerce,
            and sports industries. However, I am an open minded individual who
            is willing and ready to help solve tech challenges within any
            industry.
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
