import fakeData from "../services/fakeData";

const initState = fakeData();

export function PostsReducer(state = initState.posts, action) {
  switch (action.type) {
    case "CREATE_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return [...state.filter(s => s.id !== action.payload)];
    default:
      return state;
  }
}
