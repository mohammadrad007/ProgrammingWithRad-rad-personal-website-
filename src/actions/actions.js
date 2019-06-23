export const createPost = newPost => dispatch => {
  return dispatch({
    type: "CREATE_POST",
    payload: newPost
  });
};
export const deletePost = postId => dispatch => {
  return dispatch({
    type: "DELETE_POST",
    payload: postId
  });
};
export const createCourse = newCourse => dispatch => {
  return dispatch({
    type: "CREATE_COURSE",
    payload: newCourse
  });
};
export const deleteCourse = courseId => dispatch => {
  return dispatch({
    type: "DELETE_COURSE",
    payload: courseId
  });
};
export const loginAdmin = loggeIn => dispatch => {
  return dispatch({
    type: "LOGIN_ADMIN",
    payload: loggeIn
  });
};
export const logeoutAdmin = loggeout => dispatch => {
  return dispatch({
    type: "LOGGEOUT_ADMIN",
    payload: loggeout
  });
};
