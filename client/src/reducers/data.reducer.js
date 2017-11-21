import {
  FETCH_SKILLS,
  FETCH_RATINGS,
  FETCH_POSITIONS,
  FETCH_PROJECTS,
} from '../actions';

const INITIAL_STATE = {
  ratings: [],
  skills: [],
  positions: [],
  projects: [],
};

const dataReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SKILLS:
      return { ...state, skills: action.payload.data };
    case FETCH_RATINGS:
      return { ...state, ratings: action.payload.data };
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload.data };
    case FETCH_POSITIONS:
      return { ...state, positions: action.payload.data };
    default:
      return state;
  }
};

export { dataReducer };
