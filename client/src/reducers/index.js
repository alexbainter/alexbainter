import { combineReducers } from 'redux';
import data from './data.reducer';
import snippets from './snippets.reducer';

const rootReducer = combineReducers({
    data,
    snippets
});

export default rootReducer;
