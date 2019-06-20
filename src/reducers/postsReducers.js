import getPosts from "./../services/fakePosts";

const initState = getPosts();

export function PostsReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
