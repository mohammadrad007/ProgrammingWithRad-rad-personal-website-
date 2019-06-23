const initState = {
  loggedIn: false
};

export function loginReducer(state = initState.loggedIn, action) {
  switch (action.type) {
    case "LOGIN_ADMIN":
      return action.payload;
    case "LOGGEOUT_ADMIN":
      return action.payload;
    default:
      return state;
  }
}

// console.log(initState.loggedIn);
