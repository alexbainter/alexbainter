import React from 'react';
import sortBy from 'lodash/sortBy';
import projects from 'data/projects';
import Project from './project';

const sortedProjects = sortBy(projects, ['startDate']).reverse();

const Projects = () => (
  <div>
    {sortedProjects.map(project => (
      <Project key={project._id} {...project} />
    ))}
  </div>
);

export default Projects;
