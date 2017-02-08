import React, { Component } from 'react';
import '../styles/_home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { code: '' };
        this.typeCode(testCode);
    }
    render() {
        return (
            <div>
                <pre><code>{this.state.code}</code></pre>
            </div>
        );
    }

    typeCode(text) {
        let textIndex = 0;
        let typeInterval = setInterval(() => {
            if (textIndex < text.length) {
                this.setState({code: this.state.code += text[textIndex++]});
            } else {
                clearInterval(typeInterval);
            }
        }, 40);
    }
}

const testCode = `import React, { Component } from 'react';
import '../styles/_home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { code: '' };
        const testCode = 'Beep boop';
        this.typeCode(testCode);
    }
    render() {
        return (
            <div className="code">{this.state.code}</div>
        );
    }

    typeCode(text) {
        let textIndex = 0;
        let typeInterval = setInterval(() => {
            if (textIndex < text.length) {
                this.setState({code: this.state.code += text[textIndex++]});
            } else {
                clearInterval(typeInterval);
            }
        }, 85);
    }
}`
