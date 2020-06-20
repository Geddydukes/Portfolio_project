import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">Geddy Dukes</div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
          <li>
            <Link to={"/interests"}>Interests</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
