import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SkillListItem } from './skill-list-item';
import 'styles/_skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillsInput: '', visibleSkills: this.props.skills };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.skills.length !== this.props.skills.length) {
      this.setState({ visibleSkills: nextProps.skills });
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
          onChange={event => this.onInputChange(event.target.value)}
        />
        <ul className="skills-list">
          {this.state.visibleSkills.map(this.renderSkill)}
          {this.state.visibleSkills.length ? '' : 'No results...'}
        </ul>
      </div>
    );
  }

  renderSkill(skill) {
    return <SkillListItem {...skill} key={skill._id} />;
  }

  onInputChange(searchTerms) {
    let matchingSkills;
    if (searchTerms.length === 0) {
      matchingSkills = this.props.skills;
    } else {
      const terms = searchTerms.split(/\s*,\s*/).map(term => {
        return term.toUpperCase();
      });
      matchingSkills = this.props.skills.filter(skill => {
        return terms.some(term => {
          return term.trim() && skill.name.toUpperCase().includes(term);
        });
      });
    }

    this.setState({ visibleSkills: matchingSkills, skillsInput: searchTerms });
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export { Skills };
