import { FETCH_SKILLS, FETCH_RATINGS };

const INITAL_STATE = {
    ratings: [],
    skills: []
};

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case FETCH_SKILLS:
            return { ...state, skills: action.payload.data };
        case FETCH_RATINGS:
            return { ...state, ratings: action.payload.data };
        default:
            return state;
    }
}
