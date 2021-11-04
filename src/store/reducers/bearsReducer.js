import { BEARS_ACTION_TYPES } from "../actions/bearsActions";

const initialState = {
  bears: {
    name:'',
    tagline:'',
    items: []
  },
  singleBear: [],
  resultsFlag: false,
  error: null
};

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case BEARS_ACTION_TYPES.BEARS_GET_REQUEST_SUCCESS: {
        return {
            ...state ,
            resultsFlag: false,
            bears : {
            ...state.bears,
            name:payload.bears.name,
            items: payload.bears,
            tagline:payload.bears.tagline
           
        }  
      }
    }

    case BEARS_ACTION_TYPES.LOADING : {
      return {
         ...state,
         error : null,
         resultsFlag: true
      }
    }
  
    case BEARS_ACTION_TYPES.BEARS_GET_SINGLE_REQUEST_SUCCESS : {
      return {
        
         ...state,
         error : null,
         singleBear:payload.bear,
         resultsFlag: true,
 
      }
    }


    case BEARS_ACTION_TYPES.ERROR : {
      return {
        ...state,
        resultsFlag: false,
        error : payload.error
      }
    }
   
    default:
      return state;
  }
};