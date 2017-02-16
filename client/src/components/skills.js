import React, { Component } from 'react';
import '../styles/_skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div>
                <input className="skill-search" type="text" placeholder="JavaScript, C#, git"/>
            </div>
        )
    }
}
