import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/_nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__header">
                    alexbainter
                </div>
                <Link to="/skills" className="nav__link">
                    skills
                </Link>
                <Link to="/work" className="nav__link">
                    work
                </Link>
                <Link to="/about" className="nav__link">
                    about
                </Link>
            </div>
        );
    }
}
