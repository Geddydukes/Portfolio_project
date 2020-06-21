import React from "react";
import ReactPlayer from "react-player";

const Projects = () => {
  return (
    <div className="projectPage">
      <section className="homeSection1">
        <div className="e-comm">
          <h3>E-comm</h3>
          <ReactPlayer url="https://youtu.be/n_6DL060IlA" />
          <span>
            <bold>Technologies:</bold>
            <br></br>
            React, Node.js, MongoDb, Mongoose, Bcrypt, Cloudinary, Stripe,
            Electron, Bootstrap
          </span>
          <br></br>
          <span>
            - Solo final project where I created a mock small business store
            front that utilized a react(hooks), stripe and bootstrap to create
            an end client focused site with a live rendering and persisting cart
            to increase satisfaction in online shopping and integrated Stripe
            payments.
          </span>
          <br></br>
          <span>
            - Built an Electron App that is utilized for store administration,
            product creation and Admin profile creation. This app also utilized
            a React front end and integrated the cloudinary-react api.
          </span>
          <br />
          <span> - Made a MEN stack api to deliver store data in JSON.</span>
          <br></br>
          <span>
            See the Repo <br></br>
            <a href="https://git.generalassemb.ly/users/gdukes707/projects/2">
              https://git.generalassemb.ly/users/gdukes707/projects/2
            </a>
            , <br></br> Live version is currently not operating
          </span>
        </div>
      </section>
      <section className="homeSection2">
        <div className="movieBook">
          <h3>Movie Book</h3>
          <ReactPlayer url="https://youtu.be/hi6ze0kFqaE" />
          <span>
            <bold>Technologies:</bold>
            <br></br>
            Django, Bootstrap, AWS S3, & TMDb api
          </span>
          <br></br>
          <span>
            - Teamed with 2 other engineers to create a movie suggestion and
            review site.
          </span>
          <br></br>
          <span>
            - Was in charge of creating a 4 full crud model database with
            authorization and integration of that and the tmdb api into
            templates
          </span>
          <br />
          <span> - Built in under a week.</span>
          <br></br>
          <span>
            See the Live version here <br></br>
            <a href="https://movie-book-one.herokuapp.com/">
              https://movie-book-one.herokuapp.com/
            </a>
          </span>
        </div>
      </section>
      <section className="homeSection4">
        <div className="pokeTracker">
          <h3>PokeTracker</h3>
          <ReactPlayer url="https://youtu.be/jIQdY1wiXQQ" />
          <span>
            <bold>Technologies:</bold>
            <br></br>
            Node.js EJS Mongoose MongoDB, Bcrypt & Pokemon api
          </span>
          <br></br>
          <span>
            - Partnered with another engineer to create a Pokedex clone that
            utilized authorization to create users that could store Pokemon they
            catch in any of the first 6 games.
          </span>
          <br></br>
          <span>
            - Was in charge of creating a 3 full crud model backend with api
            integrating and some templating via ejs
          </span>
          <br />
          <span>
            {" "}
            - Was first experience with backend work and working with
            authorization.
          </span>
          <br></br>
          <span>
            See the Live version here <br></br>
            <a href="https://poke-tracker-pokedex.herokuapp.com/">
              https://poke-tracker-pokedex.herokuapp.com/
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Projects;
