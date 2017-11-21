import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import axios from 'axios';
import { getRandomSnippet } from '../github-api';
import 'styles/_home.scss';

const TYPING_CHAR_PER_MS = 40;
const TYPING_IDLE_TIME_MS = 2000;
const TYPING_SELECTED_TIME_MS = 500;
const KEYSTROKE_REGEX = /\s+|\S{1}/g;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      typing: false,
      textSelected: false,
      currentSnippet: null,
      nextSnippet: null,
    };
  }
  render() {
    return (
      <div>
        <pre className="tight-text">
          <code
            className={`fake-code ${
              this.state.typing ? '' : 'fake-code--idle'
            } ${this.state.textSelected ? 'fake-code--selected' : ''}`}
          >
            {this.state.code}
          </code>
        </pre>
      </div>
    );
  }

  componentDidMount() {
    this.fetchNewSnippet().then(() => {
      this.cycleSnippets();
      this.typeCode();
    });
  }

  typeCode() {
    let chunks = getKeystrokedChunks(this.state.currentSnippet);
    this.setState({ code: '', typing: true, textSelected: false });
    let i = 0;
    let typeInterval = this.props.setInterval(() => {
      if (i < chunks.length) {
        this.setState({ code: (this.state.code += chunks[i++]) });
      } else {
        clearInterval(typeInterval);
        this.clearCodeAndReset();
      }
    }, TYPING_CHAR_PER_MS);
  }

  clearCodeAndReset() {
    this.setState({ typing: false });
    this.props.setTimeout(() => {
      this.setState({ textSelected: true });
      this.props.setTimeout(() => {
        this.cycleSnippets();
        this.typeCode();
      }, TYPING_SELECTED_TIME_MS);
    }, TYPING_IDLE_TIME_MS);
  }

  fetchNewSnippet() {
    return getRandomSnippet().then(snippet => {
      this.setState({ nextSnippet: snippet });
    });
  }

  cycleSnippets() {
    if (!this.state.typing) {
      this.setState({ currentSnippet: this.state.nextSnippet });
      this.fetchNewSnippet();
    }
  }
}

const getKeystrokedChunks = text => {
  let chunks = [];
  let match;
  do {
    match = KEYSTROKE_REGEX.exec(text);
    if (match) {
      chunks.push(match[0]);
    }
  } while (match);
  return chunks;
};

const ReactTimeoutHome = ReactTimeout(Home);

export { ReactTimeoutHome as Home };
