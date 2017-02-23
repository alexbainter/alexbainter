import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import { fetchNewSnippet, changeSnippet } from '../actions';
import '../styles/_home.scss';

const TYPING_CHAR_PER_MS = 40;
const KEYSTROKE_REGEX = /\s+|\S{1}/g;

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

    componentWillMount() {
        this.props.fetchNewSnippet();
    }

    typeCode() {
        let chunks = getKeystrokedChunks(this.props.currentSnippet.code);
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
        this.props.fetchNewSnippet(this.props.currentSnippet._id);
    }

    clearCodeAndReset(previousIndex) {
        this.setState({ typing: false });
        this.props.setTimeout(() => {
            this.setState({textSelected: true});
            this.props.setTimeout(() => {
                this.props.changeSnippet();
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

function mapStateToProps({ snippets }) {
    return {
        currentSnippet: snippets.currentSnippet,
        nextSnippet: snippets.nextSnippet
    }
}

export default connect(mapStateToProps, { fetchNewSnippet, changeSnippet })(ReactTimeout(Home));
