import React, { Component } from 'react';
import Nav from './nav';

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
