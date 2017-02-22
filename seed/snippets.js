const Snippet = require('../models/Snippet');

const data = [
    `<!DOCTYPE html>
    <html>
        <head>
            <title>alexbainter.com</title>
            <link rel="stylesheet" href="/dist/site.css">
        </head>
        <body>
            <div class="container"></div>
            <script src="/dist/bundle.js"></script>
        </body>
    </html>`,
    `import React, { Component } from 'react';
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
    };`,
    `$fakeCodeColor: black;

    .fake-code {
        font-family: 'Roboto Mono', monospace;
        white-space: pre-wrap;
        display: inline;
        tab-size: 4;
        font-size: 0.75em;

        &--selected {
            background: $fakeCodeColor;
            color: white;

            &::after {
                display: none;
            }
        }

        &--idle {

            &::after {
                animation: 1s blink step-end infinite;
            }
        }

        &::after {
            content: '';
            display:inline-block;
            vertical-align: middle;
            height: 1em;
            width: 2px;
            background: $fakeCodeColor;
            transform: translateY(-5%);
        }
    }`
];

module.exports = Array.prototype.map.bind(data, code => {
    return new Snippet({ code }).save(err => {
        if (err) {
            console.log(`Snippet Error: ${err}`);
        }
    })
});
