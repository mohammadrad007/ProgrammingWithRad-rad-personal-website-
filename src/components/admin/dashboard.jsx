import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import CreatePost from "./createPost";
import AllPosts from "./allPosts";
import CreateCourse from "./createCourse";
import AllCourses from "./allCourses";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.logedIn);
    if (!this.props.logedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container-fluid mt-5 rtl">
        <Navbar />
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route path="/admin/create-post" component={CreatePost} />
              <Route path="/admin/allposts" component={AllPosts} />
              <Route path="/admin/create-course" component={CreateCourse} />
              <Route path="/admin/allcourses" component={AllCourses} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    logedIn: state.loginReducer
  };
};

export default connect(mapStateToProps)(Dashboard);
