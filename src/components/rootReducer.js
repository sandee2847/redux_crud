import { combineReducers } from "redux";
import { userData, countReducer } from "./reducer";

const rootReducer=combineReducers({
    mainUsers:userData,
    mainCount:countReducer
})
export {rootReducer};