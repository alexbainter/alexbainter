import { FETCH_SKILLS, FETCH_RATINGS } from '../actions';

const INITIAL_STATE = {
    ratings: [],
    skills: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SKILLS:
            return { ...state, skills: action.payload.data };
        case FETCH_RATINGS:
            return { ...state, ratings: action.payload.data };
        default:
            return state;
    }
}
