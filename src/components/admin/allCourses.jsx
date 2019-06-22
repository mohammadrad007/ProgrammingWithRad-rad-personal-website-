import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteCourse } from "./../../actions/actions";

import { paginate } from "../../utils/paginate";
import Pagination from "./../pagination";

class AllCourses extends Component {
  state = {
    courses: [],
    currentPage: 1,
    pageSize: 5
  };

  componentDidMount() {
    const courses = this.props.courses;
    this.setState({ courses });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const { pageSize, currentPage, courses: allCourses } = this.state;
    const courses = paginate(allCourses, currentPage, pageSize);

    return {
      totalCount: allCourses.length,
      data: courses
    };
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { totalCount, data } = this.getPageData();
    let count = 0;
    return (
      <div className="bg-light m-3 p-4 border rounded">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان دوره</th>
              <th>زمان دوره</th>
              <th>قیمت دوره</th>
            </tr>
          </thead>
          <tbody>
            {data.map(course => (
              <tr key={course.id}>
                <th scope="row">{count++}</th>
                <td>{course.title}</td>
                <td>{course.time}</td>
                <td>{course.price}</td>
                <td>
                  <button className="btn btn-primary">ویرایش</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.deleteCourse(course.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.CoursesReducer
  };
};

export default connect(
  mapStateToProps,
  { deleteCourse }
)(AllCourses);
