import { combineReducers } from 'redux';

// import reducers
import articles from './newsReducer';
import loader from './loaderReducer';

const allReducers = combineReducers({
  articles,
  loader,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default rootReducer;
