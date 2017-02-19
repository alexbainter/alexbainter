import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills, fetchRatings } from '../actions';
import SkillListItem from './skill-list-item';
import '../styles/_skills.scss';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.sortedSkills = this.props.skills
    }

    render() {
        return (
            <div>
                <input className="skill-search" type="text" placeholder="JavaScript, C#, git" ref={(input) => { this.searchInput = input; }}/>
                <ul className="skills-list">
                    {this.props.skills.map(this.renderSkill)}
                </ul>
            </div>
        )
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

function mapStateToProps({ skills, ratings }) {
    return {
        skills: sortSkills(skills),
        ratings: ratings
    };
}

function sortSkills(skills) {
    return skills.sort((a, b) => {
        if (a.rating.displayOrder > b.rating.displayOrder) {
            return -1
        } else if (a.rating.displayOrder < b.rating.displayOrder) {
            return 1;
        } else {
            return (a.rating.name > b.rating.name) ? -1 : 1;
        }
    });
}

export default connect(mapStateToProps, { fetchSkills, fetchRatings })(Skills);
