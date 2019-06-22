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
