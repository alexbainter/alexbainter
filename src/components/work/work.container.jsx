import React, { Component } from 'react';
import { sortBy } from 'lodash';
import positions from 'data/positions';
import projects from 'data/projects';
import { Work } from './work';

const sortedPositions = sortBy(positions, ['startDate']).reverse();
const sortedProjects = sortBy(projects, ['startDate']).reverse();

const WorkContainer = () => (
  <Work positions={sortedPositions} projects={sortedProjects} />
);

export default WorkContainer;
