import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills, fetchRatings } from '../../actions';
import { sortBy } from 'lodash';
import { Skills } from './skills';

class SkillsContainer extends Component {
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
    return <Skills skills={this.props.skills} />;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.skills.length !== this.props.skills.length) {
      this.setState({ visibleSkills: this.props.skills });
    }
  }
}

function mapStateToProps({ data }) {
  return {
    skills: sortSkills(data.skills),
    ratings: data.ratings,
  };
}

function sortSkills(skills) {
  return _.sortBy(skills, [
    skill => {
      return -skill.rating.displayOrder;
    },
    'name',
  ]);
}

const ConnectedSkillsContainer = connect(mapStateToProps, {
  fetchSkills,
  fetchRatings,
})(SkillsContainer);

export { ConnectedSkillsContainer as SkillsContainer };
