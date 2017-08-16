import { combineReducers } from "redux";

import info from "./infoReducer.js";
import tmdb from "./tmdbReducer.js";
import page from "./pageReducer.js";

export default combineReducers({
  info,
  tmdb,
  page
});
