import { combineReducers } from "redux";

import NavlinkReducer from "./navLinkReducer";

import { PostsReducer } from "./postsReducers";

export default combineReducers({ NavlinkReducer, PostsReducer });
