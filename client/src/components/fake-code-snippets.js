export default [
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
`$fake-code-color: black;

.fake-code {
    font-family: 'Roboto Mono', monospace;
    white-space: pre-wrap;
    display: inline;
    tab-size: 4;
    font-size: 0.75em;

    &--selected {
        background: $fake-code-color;
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
        background: $fake-code-color;
        transform: translateY(-5%);
    }
}

.tight-text {
    line-height: 1;
}

@keyframes blink {
  from, to {
    background: transparent;
  }
  50% {
    background: $fake-code-color;
  }
}`
];
