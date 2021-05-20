import { initialState } from '../store/index.js'

const favReducers = (state = initialState.fav, action) => {
  switch(action.type){
    case 'ADD_JOB_TO_FAV':
      return {
        ...state,
        jobs: state.jobs.concat(action.payload)
        }
      
    
    case 'REMOVE_JOB_FROM_FAV':
      return {
        jobs: [
          ...state.jobs.filter(
            (job) => job.id !== action.payload.id
          )
        ]
      }
    // ADD MORE CASES
      default: return state
    }
}

export default favReducers