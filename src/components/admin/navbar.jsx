import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logeoutAdmin } from "./../../actions/actions";

const Navbar = ({ courses, posts, logeoutAdmin }) => {
  return (
    <nav className="rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <p
        style={{ fontSize: ".8rem" }}
        className="navbar-brand col-sm-3 col-md-2 mr-0"
      >
        سلام محمد
      </p>
      <p className="mt-2" style={{ color: "white" }}>
        تعداد پست ها:
        <span className="badge badge-warning badge-pill m-2 p-2">
          {posts.length}
        </span>
      </p>
      <p className="mt-2" style={{ color: "white" }}>
        تعداد دوره ها:
        <span className="badge badge-warning badge-pill m-2 p-2">
          {courses.length}
        </span>
      </p>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link className="nav-link" to="/" onClick={() => logeoutAdmin(false)}>
            خروج
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapPropsToState = state => {
  return {
    posts: state.PostsReducer,
    courses: state.CoursesReducer
  };
};

export default connect(
  mapPropsToState,
  { logeoutAdmin }
)(Navbar);
