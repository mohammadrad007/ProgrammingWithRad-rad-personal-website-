import getCourses from "./../services/fakeCourses";

const initState = getCourses();
export function CoursesReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
