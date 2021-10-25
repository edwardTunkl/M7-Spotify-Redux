import { ADD_TRACK_PLAYLIST, ADD_ALBUM_PLAYLIST } from "../action/player.js";
import { initialState } from "../store/store.js";

export const playerReducer = (state = initialState.player, action) => {
  switch (action.type) {
    case ADD_TRACK_PLAYLIST:
      return {
        ...state,
        current: [action.payload],
        previous: [...state.previous, action.payload]
      };
    case ADD_ALBUM_PLAYLIST:
      return {
        ...state,
        album: [action.payload],
      };

    default:
      return state;
  }
};

export default playerReducer