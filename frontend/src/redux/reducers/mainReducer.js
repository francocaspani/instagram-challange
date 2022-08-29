import { combineReducers } from "redux";
import postsReducer from "./postsReducers";


const mainReducer = combineReducers({
    postsReducer
})

export default mainReducer