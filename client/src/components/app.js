import React, { Component } from 'react';
import Nav from './nav';
import '../styles/_app.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
