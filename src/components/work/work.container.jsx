import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { sortBy } from 'lodash';
import { fetchProjects, fetchPositions } from '../../actions';
import { Work } from './work';
import { ifEmpty } from '../utils';

class WorkContainer extends Component {
  componentWillMount() {
    ifEmpty(this.props.positions)(this.props.fetchPositions);
    ifEmpty(this.props.projects)(this.props.fetchProjects);
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
