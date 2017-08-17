import { combineReducers } from "redux";

import info from "./infoReducer.js";
import tmdb from "./tmdbReducer.js";
import page from "./pageReducer.js";
import player from "./playerReducer.js";

export default combineReducers({
  info,
  tmdb,
  page,
  player
});
