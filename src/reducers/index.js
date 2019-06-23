import { combineReducers } from "redux";

import NavlinkReducer from "./navLinkReducer";
import { PostsReducer } from "./postsReducers";
import { CoursesReducer } from "./coursesReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  NavlinkReducer,
  PostsReducer,
  CoursesReducer,
  loginReducer
});
