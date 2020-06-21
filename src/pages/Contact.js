import React from "react";

const Contact = () => {
  return (
    <div className="homePage">
      <section className="homeSection1">
        <div className="traditionalContact">
          <h3>Traditional Contact Information</h3>

          <br></br>
          <p>Phone: (707) - 799 - 1271</p>
          <br></br>
          <p>Email: Gdukes707@gmail.com</p>
        </div>
      </section>
      <section className="homeSection3"></section>
      <section className="homeSection2">
        <h3>Social Media Contact</h3>
        <br></br>
        <div className="socialLinks">
          <span className="socialLinksSpan">
            <a href="https://twitter.com/Geddysburgadr">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Geddydukes">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/gdukes707">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/geddydukes/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/geddy-dukes/">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
