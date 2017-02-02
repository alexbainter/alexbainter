import React, { Component } from 'react';
import { Link } from 'react-router';

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
                <Link to="/contact" className="nav__link">
                    contact
                </Link>
            </div>
        );
    }
}
