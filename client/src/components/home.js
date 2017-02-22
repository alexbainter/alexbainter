import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import '../styles/_home.scss';

const TYPING_CHAR_PER_MS = 40;
const KEYSTROKE_REGEX = /\s+|\S{1}/g;
const CodeSnippets = [];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { code: '', typing: false, textSelected: false };
    }
    render() {
        return (
            <div>
                <pre className="tight-text"><code className={"fake-code" + (this.state.typing ? '' : ' fake-code--idle') + (this.state.textSelected ? ' fake-code--selected' : '')}>{this.state.code}</code></pre>
            </div>
        );
    }

    componentDidMount() {
        //this.typeCode(getRandomIndex(CodeSnippets));
    }

    typeCode(snippetsIndex) {
        let chunks = getKeystrokedChunks(CodeSnippets[snippetsIndex])
        this.setState({ code: '', typing: true, textSelected: false });
        let i = 0;
        let typeInterval = this.props.setInterval(() => {
            if (i < chunks.length) {
                this.setState({code: this.state.code += chunks[i++]});
            } else {
                clearInterval(typeInterval);
                this.clearCodeAndReset(snippetsIndex);
            }
        }, TYPING_CHAR_PER_MS);
    }

    clearCodeAndReset(previousIndex) {
        this.setState({ typing: false });
        let nextIndex = previousIndex;
        if (CodeSnippets.length > 1) {
            do {
                nextIndex = getRandomIndex(CodeSnippets);
            } while (nextIndex === previousIndex);
        }
        this.props.setTimeout(() => {
            this.setState({textSelected: true});
            this.props.setTimeout(() => {
                this.typeCode(nextIndex);
            }, 500);
        }, 2000);
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getKeystrokedChunks(text) {
    let chunks = [];
    let match;
    do {
        match = KEYSTROKE_REGEX.exec(text);
        if (match) {
            chunks.push(match[0]);
        }
    } while (match);
    return chunks;
}

export default ReactTimeout(Home);
