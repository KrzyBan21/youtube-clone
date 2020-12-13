import filmList from "./filmList";
import comments from "./comments";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filmList,
  comments,
});

export default rootReducer;
