import { initialState } from "../store/store.js";

export const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case "SEARCH_IT":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        query: action.payload,
      };
    case "SEARCH_CLEAN_UP":
      return {
        ...state,
        query: "",
        data: [],
      };
    case "SEARCH_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
