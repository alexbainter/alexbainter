import { combineReducers } from 'redux';
import { dataReducer as data } from './data.reducer';

const rootReducer = combineReducers({
  data,
});

export { rootReducer };
