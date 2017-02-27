import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/_nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <IndexLink to="/" className="nav__header" activeClassName="nav__header--active">
                    alexbainter
                </IndexLink>
                <Link to="/skills" className="nav__link" activeClassName="nav__link--active">
                    skills
                </Link>
                <Link to="/work" className="nav__link" activeClassName="nav__link--active">
                    work
                </Link>
                <Link to="/about" className="nav__link" activeClassName="nav__link--active">
                    about
                </Link>
            </div>
        );
    }
}
