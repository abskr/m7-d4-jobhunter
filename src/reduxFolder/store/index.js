import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favReducers from '../reducers/fav.js';
import searchReducers from '../reducers/search.js';
import thunk from 'redux-thunk'
import detailReducers from '../reducers/jobdetail.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  fav: {
    jobs: []
  },
  // user: {
  //   username: null,
  // },
  search: {
    jobList: [],
    error: false
  },
  selectedJob: {
    jobDetail: null,
    error: false
  }
}

const bigReducer = combineReducers({
  fav: favReducers,
  search: searchReducers,
  selectedJob: detailReducers
})

export default function configStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}