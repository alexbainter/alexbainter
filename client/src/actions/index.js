import axios from 'axios';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const FETCH_RATINGS = 'FETCH_RATINGS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

function baseAPIFetch(actionType, apiRoute) {
  const request = axios.get(`/api/${apiRoute}`);
  return {
      type: actionType,
      payload: request
  }
}

export function fetchSkills() {
  return baseAPIFetch(FETCH_SKILLS, 'skills');
}

export function fetchRatings() {
  return baseAPIFetch(FETCH_RATINGS, 'ratings');
}

export function fetchProjects() {
  return baseAPIFetch(FETCH_PROJECTS, 'projects');
}

export function fetchPositions() {
  return baseAPIFetch(FETCH_POSITIONS, 'positions');
}
