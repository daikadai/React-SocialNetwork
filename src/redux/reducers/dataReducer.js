import { LOADING_DATA, LIKE_SCREAM, UNLIKE_SCREAM, SET_SCREAMS, DELETE_SCREAM, POST_SCREAM, SET_SCREAM, SUBMIT_COMMENT } from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false
      }
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload
      }
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      // let index = state.screams.findIndex(scream => scream.screamId === action.payload.screamId);
      // state.screams[index] = action.payload;
      // if(state.scream.screamId === action.payload.screamId) {
      //   state.scream = action.payload
      // }
      const { comments } = state.scream;
      return {
        ...state,
        screams: state.screams.map(scream => scream.screamId === action.payload.screamId ? action.payload : scream ),
        scream: state.scream.screamId === action.payload.screamId && {...action.payload, comments}
      }
    case DELETE_SCREAM:
      return {
        ...state, 
        screams: state.screams.filter(scream => scream.screamId !== action.payload)
      }
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload,...state.screams]
      }
    case SUBMIT_COMMENT:
      return {
        ...state,
        screams: state.screams.map(scream => scream.screamId === action.payload.screamId ? {...scream, commentCount: scream.commentCount + 1} : scream),
        scream: {
          ...state.scream,
          commentCount: state.scream.commentCount + 1,
          comments: [action.payload, ...state.scream.comments]
        }
      }
    default: 
      return state;
  }
}