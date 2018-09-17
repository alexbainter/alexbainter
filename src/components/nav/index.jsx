import React from 'react';
import NavLink from './custom-nav-link';
import SecondaryNavLink from './secondary-nav-link';
import 'styles/_nav.scss';

const Nav = () => (
  <div className="nav">
    <NavLink
      to="/"
      className="nav__header"
      activeClassName="nav__header--active"
      text="alexbainter"
    />
    <SecondaryNavLink text="skills" />
    <SecondaryNavLink text="work" />
    <SecondaryNavLink text="about" />
  </div>
);

export default Nav;
