import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import Like from "./like";
class Posts extends Component {
  state = {
    posts: [],
    currentPage: 1,
    pageSize: 5
  };

  componentDidMount() {
    // console.log(this.props.post);
    const posts = this.props.posts;
    this.setState({ posts });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
    window.scroll({
      top: 150,
      left: 100,
      behavior: "smooth"
    });
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
    const { pageSize, currentPage } = this.state;
    const { length: count } = this.state.posts;

    if (count === 0)
      return (
        <div className="container">
          <div className="col-12 nothing">
            <div className="col">
              <p>سلام رفیق چطوری؟ (:</p>
              <h4>فعلا پستی برا نمایش نیست</h4>
            </div>
            <div className="col">
              <p>
                چرا نمیری تو صفحات دیگه؟؟ <br /> از منوی کناری انتخاب کن صفحه ت
                رو <br /> اگرم با موبایل اومدی تو قسمت پایین سایت برات مهم های
                سایت رو گذاشتم
              </p>
              <i className="fa fa-angle-down" />
            </div>
          </div>
        </div>
      );

    const { totalCount, data } = this.getPageData();
    return (
      <React.Fragment>
        {data.map(post => (
          <div className="container" key={post.id}>
            <div className="card shadow-lg bg-light m-2">
              <article className="p-3 ">
                <div className="card-header">
                  <h3 className="card-title">
                    <p>{post.postTitle}</p>
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
                      <a href="">{post.postTags}</a>
                    </li>
                  </ul>
                  <Like post={post} />
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
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.PostsReducer
  };
};
export default connect(mapStateToProps)(Posts);
