import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import _ from 'lodash';
import { fetchProjects, fetchPositions } from '../actions';

class Work extends Component {
  componentWillMount() {
    if (!this.props.positions.length) {
      this.props.fetchPositions();
    }
    if (!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }

  render() {
    return (
      <div>
        <h2>Positions</h2>
        {this.props.positions.map(this.renderPosition)}
        <h2>Projects</h2>
        {this.props.projects.map(this.renderProject)}
      </div>
    );
  }

  renderPosition(position) {
    return (
      <div key={position._id} className="work-item">
        <h3 className="work-item__header">{position.name}</h3>
        <h4 className="work-item__header">
          <a href={position.linkURL}>{position.company}</a>
        </h4>
        <h5 className="work-item__header">
          {formatPositionDateRange(position.startDate, position.endDate)}
        </h5>
        <p className="work-item__description">{position.description}</p>
        <h5>{stringifySkills(position.skills)}</h5>
        <hr />
      </div>
    );
  }

  renderProject(project) {
    return (
      <div key={project._id} className="work-item">
        <h3 className="work-item__header">
          {typeof project.linkURL === 'string' ? (
            <a href={project.linkURL}>{project.name}</a>
          ) : (
            project.name
          )}
        </h3>
        <h4 className="work-item__header">
          <a href={project.codeURL}>Source Code</a>
        </h4>
        <h5 className="work-item__header">{formatDate(project.startDate)}</h5>
        <p className="work-item__description">{project.description}</p>
        <h5>{stringifySkills(project.skills)}</h5>
        <hr />
      </div>
    );
  }
}

function formatPositionDateRange(startDate, endDate) {
  return `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Now'}`;
}

function formatDate(date) {
  return dateFormat(date, 'mmm yyyy');
}

function stringifySkills(skills) {
  return skills
    .map(skill => {
      return skill.name;
    })
    .sort()
    .join(', ');
}

function mapStateToProps({ data }) {
  return {
    projects: _.sortBy(data.projects, ['startDate']).reverse(),
    positions: _.sortBy(data.positions, ['startDate']).reverse(),
  };
}

export default connect(mapStateToProps, { fetchProjects, fetchPositions })(
  Work
);
