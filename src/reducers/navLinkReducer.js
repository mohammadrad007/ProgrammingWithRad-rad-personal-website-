import getNavLinks from "./../services/navLinks";

const inintState = getNavLinks();

const NavlinkReducer = (state = inintState, action) => {
  return state;
};

export default NavlinkReducer;
