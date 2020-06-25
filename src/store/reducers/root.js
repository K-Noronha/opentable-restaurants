import { combineReducers } from "redux";
import restaurantsReducer from "./restaurantsReducer";

const allReducers = combineReducers({ restaurantsReducer });

export default allReducers;
