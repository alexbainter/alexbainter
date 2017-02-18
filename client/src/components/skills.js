import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills, fetchRatings } from '../actions';
import SkillListItem from './skill-list-item';
import '../styles/_skills.scss';

class Skills extends Component {
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
        return <SkillListItem {...skill} />
    }

    componentWillMount() {
        this.props.fetchSkills();
        this.props.fetchRatings();
    }

    componentDidMount() {
        this.searchInput.focus();
    }
}

function mapStateToProps({ skills, ratings }) {
    return { skills, ratings };
}

export default connect(mapStateToProps, { fetchSkills, fetchRatings })(Skills);
