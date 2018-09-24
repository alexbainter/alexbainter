import React, { Component } from 'react';
import Headroom from 'react-headroom';
import NavLink from './custom-nav-link';
import SecondaryNavLink from './secondary-nav-link';
import dynamicallyLoaded from '../dynamically-loaded';
import 'styles/_nav.scss';

const MuteUnmuteButton = dynamicallyLoaded(import('./mute-unmute-button'));

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { muted: true };

    this.handleMuteClick = this.handleMuteClick.bind(this);
  }
  render() {
    return (
      <Headroom disableInlineStyles={true}>
        <header className="nav">
          <MuteUnmuteButton />
          <NavLink
            to="/"
            className="nav__header"
            activeClassName="nav__header--active"
            text="alexbainter"
          />
          <SecondaryNavLink text="projects" />
          <SecondaryNavLink text="positions" />
          <SecondaryNavLink text="about" />
        </header>
      </Headroom>
    );
  }
  handleMuteClick() {
    this.setState({ muted: !this.state.muted });
  }
}

export default Nav;
