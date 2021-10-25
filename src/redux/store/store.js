import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from "../reducer/user";
import { searchReducer } from "../reducer/search";
import thunk from "redux-thunk";
import {playerReducer} from "../reducer/player";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    name: "",
    image:
      "https://cdn2.iconfinder.com/data/icons/everything-in-office/65/icon_Ai-11-512.png",
    liked: [],
    playlist1: [],
    playlist2: [],
  },
  search: {
    query: "",
    type: "",
    data: [],
    page: 0,
    loading: false,
  },
  player: {
    current: [],
    album: [],
    previous: [],
  },
};

const bigReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  player: playerReducer
});

const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
