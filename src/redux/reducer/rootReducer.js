import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
    sort: sortReducer,
    blogs: blogReducer
})