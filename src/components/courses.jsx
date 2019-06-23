import React, { Component } from "react";
import { connect } from "react-redux";

class Courses extends Component {
  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      <div className="container-fluid">
        <div className="row">
          {courses.map(course => (
            <div
              className="col-lg-3 col-md-5 col-sm-6 col-xs-6 card m-2"
              key={course.id}
            >
              <div className="card-img">
                <img
                  className="img-fluid img-thumbnail"
                  src={course.imageUrl}
                  alt=""
                />
              </div>

              <div className="card-title">
                <p className="text-center m-2">{course.title}</p>
              </div>
              <div className="card-body">
                <p className="text-center " style={{ margin: "-15px 0" }}>
                  {course.text}
                </p>
              </div>
              <div className="card-footer">
                <span className="fa fa-clock-o m-1" />
                {course.time}

                <span className="badge badge-pill m-0 p-2 badge-primary float-left">
                  {course.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    courses: state.CoursesReducer
  };
};

export default connect(mapStateToProps)(Courses);
