import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserInfo from "./userInfo";

class Sidebar extends Component {
  render() {
    // console.log(this.props.NavlinkReducer);
    const { navLinks, coueses } = this.props;
    return (
      <nav className="col-lg-2 col-md-3 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <UserInfo
            imgUrl="https://avatars2.githubusercontent.com/u/46299535?s=400&u=cd5d7b8cd3940e1150c87b5c8621fd933caaffe2&v=4"
            fullname="محمد راد"
            text="برنامه نویس و طراح وب"
          />
          <hr className="shadow" />
          <ul className="nav flex-column">
            {navLinks.map(nav => (
              <li className="nav-item" key={nav.id}>
                <Link
                  to={nav.link}
                  className="nav-link"
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 100,
                      behavior: "smooth"
                    })
                  }
                >
                  <span className={nav.icon} />
                  <span className="m-2">{nav.text}</span>
                  {nav.text === "دوره ها" ? (
                    <span className="badge-danger badge-pill">
                      {coueses.length}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    navLinks: state.NavlinkReducer,
    coueses: state.CoursesReducer
  };
};

export default connect(mapStateToProps)(Sidebar);
