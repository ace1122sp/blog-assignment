import { combineReducers } from 'redux';
import fetching from './fetching/reducer';
import errors from './errors/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
  fetching,
  errors,
  posts,
});

export default rootReducer;
