import { initialState } from "../store/store.js";

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'LIKES': {

      return {
        ...state,
        liked: state.liked.concat(action.payload)
        // liked: [...state.liked, action.payload]
      }
    }
      case 'PLAYLIST_ONE':{

        return {
          ...state,
          playlist1: state.playlist1.concat(action.payload)
          // liked: [...state.liked, action.payload]
        }
      }
        case 'PLAYLIST_TWO':{

          return {
            ...state,
            playlist2: state.playlist2.concat(action.payload)
            // liked: [...state.liked, action.payload]
          }
        }
        //////////Removing Cases
        case 'REMOVE_LIKES':{
            return {
              ...state,
              liked: state.liked.filter( e => e.id !== action.payload.id)
            }
        }
        case 'REMOVE_FROM_PLAYLIST_ONE': {
            return {
              ...state,
              playlist1: state.playlist1.filter(e => e.id !== action.payload.id)
            }
        }
        case 'REMOVE_FROM_PLAYLIST_TWO': {
          return {
            ...state,
            playlist2: state.playlist2.filter(e => e.id !== action.payload.id)
          }
        }

    default:
      return state;
  }
};
