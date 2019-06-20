import React, { Component } from "react";
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {data.map(post => (
          <div className="container-fluid" key={post.id}>
            <div className="card shadow-lg bg-light m-2">
              <article className="p-3">
                <div className="card-header">
                  <h3 className="card-title">
                    <a href="#">{post.postTitle}</a>
                  </h3>
                  <span className="card-subtitle">
                    <span className="fa fa-calendar m-2" />
                    {post.postDate}
                  </span>
                  <img src={post.postImageUrl} alt="" className="card-img" />
                </div>
                <div className="card-body">
                  <p className="card-text">{post.postContent}</p>
                </div>
                <div className="card-footer">
                  <ul className="list-inline float-right">
                    <li className="list-inline-item">
                      <span className="fa fa-link m-1" />
                      برچسپ ها :
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{post.postTags}</a>
                    </li>
                  </ul>
                  {/* <Like post={post} /> */}
                </div>
              </article>
            </div>
          </div>
        ))}
        {/* // <Pagination
        //   itemCount={totalCount}
        //   pageSize={pageSize}
        //   currentPage={currentPage}
        //   onPageChange={this.handlePageChange}
        // /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.PostsReducer
  };
};
export default connect(mapStateToProps)(Posts);
