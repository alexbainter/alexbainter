const Snippet = require('../models/Snippet');

const data = [
`<!DOCTYPE html>
<html>
    <head>
        <title>alexbainter.com</title>
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
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
}`,
`import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/_nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <IndexLink to="/" className="nav__header" activeClassName="nav__header--active">
                    alexbainter
                </IndexLink>
                <Link to="/skills" className="nav__link" activeClassName="nav__link--active">
                    skills
                </Link>
                <Link to="/work" className="nav__link" activeClassName="nav__link--active">
                    work
                </Link>
                <Link to="/about" className="nav__link" activeClassName="nav__link--active">
                    about
                </Link>
            </div>
        );
    }
}`,
`import { FETCH_SKILLS, FETCH_RATINGS, FETCH_POSITIONS, FETCH_PROJECTS } from '../actions';

const INITIAL_STATE = {
    ratings: [],
    skills: [],
    positions: [],
    projects: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SKILLS:
            return { ...state, skills: action.payload.data };
        case FETCH_RATINGS:
            return { ...state, ratings: action.payload.data };
        case FETCH_PROJECTS:
            return { ...state, projects: action.payload.data };
        case FETCH_POSITIONS:
            return { ...state, positions: action.payload.data };
        default:
            return state;
    }
}`,
`import axios from 'axios';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const FETCH_RATINGS = 'FETCH_RATINGS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export function fetchSkills() {
    return baseAPIFetch(FETCH_SKILLS, 'skills');
}

export function fetchRatings() {
    return baseAPIFetch(FETCH_RATINGS, 'ratings');
}

export function fetchProjects() {
    return baseAPIFetch(FETCH_PROJECTS, 'projects');
}

export function fetchPositions() {
    return baseAPIFetch(FETCH_POSITIONS, 'positions');
}

function baseAPIFetch(actionType, apiRoute) {
    const request = axios.get(\`/api/\${apiRoute}\`);
    return {
        type: actionType,
        payload: request
    }
}`,
`.link-container {
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    &__link {
        display: inline-block;
        margin: 0 1rem;
    }
}`,
`@import '_variables.scss';

.nav {
    margin: 20px auto;
    text-align: center;
    font-family: $sansSerifFontFamilyName, sans-serif;

    &__header {
        font-size: 2rem;
        display: block;
        color: black;

        &--active {
             text-decoration: underline;
        }
    }

    &__link {
        display: inline-block;
        font-size: 1.5rem;
        padding: 0.5rem;
        color: black;

        &--active {
            text-decoration: underline;
        }
    }
}`,
`import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import About from './components/about';
import Home from './components/home';
import Skills from './components/skills';
import Work from './components/work';
import NotFound from './components/not-found';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="skills" component={Skills} />
        <Route path="work" component={Work} />
        <Route path="*" component={NotFound} />
    </Route>
);`,
`render() {
    return (
        <div>
            <pre className="tight-text"><code className={"fake-code" + (this.state.typing ? '' : ' fake-code--idle') + (this.state.textSelected ? ' fake-code--selected' : '')}>{this.state.code}</code></pre>
        </div>
    );
}`,
`typeCode() {
    let chunks = getKeystrokedChunks(this.state.currentSnippet.code);
    this.setState({ code: '', typing: true, textSelected: false });
    let i = 0;
    let typeInterval = this.props.setInterval(() => {
        if (i < chunks.length) {
            this.setState({code: this.state.code += chunks[i++]});
        } else {
            clearInterval(typeInterval);
            this.clearCodeAndReset();
        }
    }, TYPING_CHAR_PER_MS);
}`,
`clearCodeAndReset() {
    this.setState({ typing: false });
    this.props.setTimeout(() => {
        this.setState({ textSelected: true });
        this.props.setTimeout(() => {
            this.cycleSnippets();
            this.typeCode();
        }, TYPING_SELECTED_TIME_MS);
    }, TYPING_IDLE_TIME_MS);
}`,
`function getKeystrokedChunks(text) {
    let chunks = [];
    let match;
    do {
        match = KEYSTROKE_REGEX.exec(text);
        if (match) {
            chunks.push(match[0]);
        }
    } while (match);
    return chunks;
}`,
`render() {
    return (
        <li className="skills-list__item">
            {this.props.name}
            <div className="circle-container">
                {this.props.ratings.map(this.renderCircle)}
                <div className="circle-container__tip">
                    {this.props.rating.description}
                </div>
            </div>
        </li>
    );
}

renderCircle(rating) {
    return (
        <div className={'circle' +
            (this.props.rating.displayOrder >= rating.displayOrder ? ' circle--filled' : '')}
            key={rating._id}>
        </div>
    );
}`,
`.skills-list {
    list-style-type: none;
    padding-left: 0;

    &__item {
        padding: 1rem;
        font-size: 2rem;
        position: relative;
        font-family: $sansSerifFontFamilyName;
    }
}`,
`@media screen and (max-width: $mobileMaxWidth) {
    .skills-list {

        &__item {
            font-size: 1.5rem;
        }
    }

    .circle-container {

        &__tip {
            margin-top: 1.5rem;
            right: 6.5rem;
        }
    }

    .circle {
        height: 0.5rem;
        width: 0.5rem;
    }
}`,
`function handleQueryResult(res, next, err, result) {
    if (err) {
        next(err);
    }
    res.json(result);
}

router.get('/ratings', (req, res, next) => {
    Rating.find(handleQueryResult.bind(null, res, next));
});

router.get('/skills', (req, res, next) => {
    Skill.find().populate('rating').exec(handleQueryResult.bind(null, res, next));
});`,
`const dbConfig = require('./config/db');
const { defaultHTML, clientDir } = require('./config/client');
const { port } = require('./config/server');
const app = express();

mongoose.connect(dbConfig.path, { keepAlive: dbConfig.keepAliveMS });

app.use(express.static(path.resolve(__dirname, clientDir)));`,
`cycleSnippets() {
    if (!this.state.typing) {
        this.setState({ currentSnippet: this.state.nextSnippet });
        this.fetchNewSnippet();
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
