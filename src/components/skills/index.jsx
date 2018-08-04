import React, { Component } from 'react';
import { sortBy } from 'lodash';
import skills from 'data/skills';
import Skills from './skills';

const sortedSkills = sortBy(skills, [
  skill => -skill.rating.displayOrder,
  'name',
]);

const SkillsContainer = () => <Skills skills={sortedSkills} />;

export default SkillsContainer;
