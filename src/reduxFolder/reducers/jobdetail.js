import { initialState } from '../store/index.js';

const detailReducers = (state = initialState.selectedJob, action) => {
  switch (action.type) {
    case 'GET_JOBDETAIL':
      return {
        ...state,
        jobDetail: action.payload,
      };

    case 'GET_JOBDETAIL_TOGGLE_ERROR':
      return {
        ...state,
        error: !state.error,
      };
    // ADD MORE CASES
    default:
      return state;
  }
};

export default detailReducers;
