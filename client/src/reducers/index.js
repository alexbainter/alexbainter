import { combineReducers } from 'redux';
import { FETCH_SKILLS, FETCH_RATINGS } from '../actions';

function fetchedDataReducer(actionTypeToMatch) {
    return function(state = [], action) {
        switch (action.type) {
            case actionTypeToMatch:
                return [ ...state, ...action.payload.data ];
            default:
                return state;
        }
    }
}

const rootReducer = combineReducers({
    skills: fetchedDataReducer(FETCH_SKILLS),
    ratings: fetchedDataReducer(FETCH_RATINGS)
});

export default rootReducer;
