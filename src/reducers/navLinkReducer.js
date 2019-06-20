import getNavLinks from "./../services/navLinks";

const inintState = getNavLinks();

console.log(inintState);

const NavlinkReducer = (state = inintState, action) => {
  return state;
};

export default NavlinkReducer;
