import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills, fetchRatings } from '../actions';
import SkillListItem from './skill-list-item';
import '../styles/_skills.scss';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { skillsInput: '', visibleSkills: []}
    }

    render() {
        return (
            <div>
                <input
                    className="skill-search"
                    type="text"
                    placeholder="JavaScript, C#, git"
                    ref={(input) => { this.searchInput = input; }}
                    value={this.state.skillsInput}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
                <i>What do these ratings mean?</i>
                <ul className="skills-list">
                    {this.state.visibleSkills.map(this.renderSkill)}
                </ul>
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.skills.length !== this.props.skills.length) {
            this.setState({ visibleSkills: this.props.skills });
        }
    }

    onInputChange(searchTerms) {
        let matchingSkills;
        if (searchTerms.length === 0) {
            matchingSkills = this.props.skills;
        } else {
            const terms = searchTerms.split(/\s*,\s*/).map((term) => {
                return term.toLowerCase();
            });
            matchingSkills = this.props.skills.filter((skill) => {
                return terms.includes(skill.name.toLowerCase());
            });
        }

        this.setState({ visibleSkills: matchingSkills, skillsInput: searchTerms });
    }

    renderSkill(skill) {
        return <SkillListItem {...skill} key={skill._id} />
    }

    componentWillMount() {
        if (!this.props.skills.length) {
            this.props.fetchSkills();
        }

        if (!this.props.ratings.length) {
            this.props.fetchRatings();
        }
    }

    componentDidMount() {
        this.searchInput.focus();
    }
}

function mapStateToProps({ data }) {
    return {
        skills: sortSkills(data.skills),
        ratings: data.ratings
    };
}

function sortSkills(skills) {
    return skills.sort((a, b) => {
        if (a.rating.displayOrder > b.rating.displayOrder) {
            return -1
        } else if (a.rating.displayOrder < b.rating.displayOrder) {
            return 1;
        } else {
            return (a.name > b.name) ? 1 : -1;
        }
    });
}

export default connect(mapStateToProps, { fetchSkills, fetchRatings })(Skills);
