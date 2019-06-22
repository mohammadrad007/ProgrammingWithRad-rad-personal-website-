import React, { Component } from "react";
import { connect } from "react-redux";

import { deletePost } from "./../../actions/actions";
import { paginate } from "../../utils/paginate";
import Pagination from "./../pagination";
import Like from "./../like";

class AllPosts extends Component {
  state = {
    posts: [],
    currentPage: 1,
    pageSize: 5
  };

  componentDidMount() {
    const posts = this.props.posts;
    this.setState({ posts });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const { pageSize, currentPage, posts: allPosts } = this.state;
    const posts = paginate(allPosts, currentPage, pageSize);

    return {
      totalCount: allPosts.length,
      data: posts
    };
  };
  render() {
    let count = 1;
    const { pageSize, currentPage } = this.state;
    const { totalCount, data } = this.getPageData();

    return (
      <div className="bg-light m-3 p-4 border rounded">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پست</th>
              <th>تاریخ انتشار</th>
              <th>تعداد لایک</th>
            </tr>
          </thead>
          <tbody>
            {data.map(post => (
              <tr key={post.id}>
                <th scope="row">{count++}</th>
                <td>{post.postTitle}</td>
                <td>{post.postDate}</td>
                <td>{post.like}</td>
                <td>
                  <button className="btn btn-primary">ویرایش</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.deletePost(post.id)}
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
    posts: state.PostsReducer
  };
};

export default connect(
  mapStateToProps,
  { deletePost }
)(AllPosts);
