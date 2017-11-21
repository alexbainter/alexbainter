import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { sortBy } from 'lodash';
import { fetchProjects, fetchPositions } from '../../actions';
import { Work } from './work';

class WorkContainer extends Component {
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
      <Work positions={this.props.positions} projects={this.props.projects} />
    );
  }
}

const mapStateToProps = ({ data }) => ({
  projects: sortBy(data.projects, ['startDate']).reverse(),
  positions: sortBy(data.positions, ['startDate']).reverse(),
});

const ConnectedWorkContainer = connect(mapStateToProps, {
  fetchProjects,
  fetchPositions,
})(WorkContainer);

export { ConnectedWorkContainer as WorkContainer };
