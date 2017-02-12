import React, { Component } from 'react';
import CodeSnippets from './fake-code-snippets';
import '../styles/_home.scss';

const TYPING_CHAR_PER_MS = 40;

export default class Home extends Component {
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
        this.typeCode(0);
    }

    typeCode(snippetsIndex) {
        this.setState({ code: '', typing: true, textSelected: false });
        const text = CodeSnippets[snippetsIndex];
        let textIndex = 0;
        let typeInterval = setInterval(() => {
            if (textIndex < text.length) {
                this.setState({code: this.state.code += text[textIndex++]});
            } else {
                clearInterval(typeInterval);
                this.setState({ typing: false });
                let nextIndex = (snippetsIndex >= CodeSnippets.length - 1) ? 0 : ++snippetsIndex
                setTimeout(() => {
                    this.setState({textSelected: true});
                    setTimeout(() => {
                        this.typeCode(nextIndex);
                    }, 500);
                }, 2000);
            }
        }, TYPING_CHAR_PER_MS);
    }
}
