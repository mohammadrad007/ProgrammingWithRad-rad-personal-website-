import fakeData from "./../services/fakeData";

const initState = fakeData();
export function CoursesReducer(state = initState.courses, action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, action.payload];
    case "DELETE_COURSE":
      return [...state.filter(s => s.id !== action.payload)];
    default:
      return state;
  }
}
