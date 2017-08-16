import { combineReducers } from "redux";

import info from "./infoReducer.js";
import tmdb from "./tmdbReducer.js";

export default combineReducers({
  info,
  tmdb
});
