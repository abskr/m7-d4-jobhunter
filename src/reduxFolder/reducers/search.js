import { initialState } from '../store/index.js';

const searchReducers = (state = initialState.search, action) => {
  switch (action.type) {
    case 'GET_JOBLIST':
      return {
        ...state,
          jobList: action.payload
      };

    case 'GET_JOBLIST_TOGGLE_ERROR':
      return {
        ...state,
          error: !state.error
      };
    // ADD MORE CASES
    default:
      return state;
  }
};

export default searchReducers;
