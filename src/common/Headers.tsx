import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News</h1>
      <div className="navbar-css">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <span>|</span>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <span>|</span>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;
