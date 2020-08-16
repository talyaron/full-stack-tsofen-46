import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavBar(params) {
  return (
    <Fragment>
      <nav className="main-nav">
        <div className="nav-items">
          <NavLink
            exact
            className="inactive"
            activeClassName="active"
            to="/home/overview"
          >
            Status
          </NavLink>

          <NavLink
            className="inactive"
            activeClassName="active"
            to="/home/analytics"
          >
            Analytics
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
}
