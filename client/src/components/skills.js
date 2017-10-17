import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchSkills, fetchRatings } from '../actions';
import SkillListItem from './skill-list-item';
import '../styles/_skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillsInput: '', visibleSkills: []}
  }

  componentWillMount() {
    if (!this.props.skills.length) {
      this.props.fetchSkills();
    } else {
      this.setState({ visibleSkills: this.props.skills });
    }

    if (!this.props.ratings.length) {
      this.props.fetchRatings();
    }
  }

  render() {
    return (
      <div>
        <input
          className="skill-search"
          type="text"
          placeholder="JavaScript, C#, git"
          value={this.state.skillsInput}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <ul className="skills-list">
          {this.state.visibleSkills.map(this.renderSkill)}
          {this.state.visibleSkills.length ? '' : 'No results...'}
        </ul>
      </div>
    );
  }

  renderSkill(skill) {
    return <SkillListItem {...skill} key={skill._id} />
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
        return term.toUpperCase();
      });
      matchingSkills = this.props.skills.filter((skill) => {
        return terms.some((term) => {
          return term.trim() && skill.name.toUpperCase().includes(term);
        });
      });
    }

    this.setState({ visibleSkills: matchingSkills, skillsInput: searchTerms });
  }
}

function mapStateToProps({ data }) {
  return {
    skills: sortSkills(data.skills),
    ratings: data.ratings
  };
}

function sortSkills(skills) {
  return _.sortBy(skills, [(skill) => { return -skill.rating.displayOrder}, 'name']);
}

export default connect(mapStateToProps, { fetchSkills, fetchRatings })(Skills);
