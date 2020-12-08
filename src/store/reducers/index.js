import filmList from "./filmList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filmList: filmList,
});

export default rootReducer;
