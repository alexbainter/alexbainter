import React, { Component } from 'react';
import '../styles/_skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div>
                <input className="skill-search" type="text" placeholder="JavaScript, C#, git" ref={(input) => { this.searchInput = input; }}/>
                <ul className="skills-list">
                    <li className="skills-list__item">
                        oeu
                    </li>
                    <li className="skills-list__item">
oeu
                    </li>
                    <li className="skills-list__item">
oeu
                    </li>
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.searchInput.focus();
    }
}
