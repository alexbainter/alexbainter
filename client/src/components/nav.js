import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/_nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          to="/"
          className="nav__header"
          activeClassName="nav__header--active"
          exact
        >
          alexbainter
        </NavLink>
        <NavLink
          to="/skills"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          skills
        </NavLink>
        <NavLink
          to="/work"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          work
        </NavLink>
        <NavLink
          to="/about"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          about
        </NavLink>
      </div>
    );
  }
}
