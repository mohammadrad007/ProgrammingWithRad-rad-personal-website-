import React, { Component } from "react";

import { connect } from "react-redux";
import { loginAdmin } from "./../actions/actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.email === "saberzx313@gmail.com" &&
      this.state.password === "12345678"
    ) {
      this.props.loginAdmin(true);

      this.props.history.replace("/admin");
    } else {
      this.props.loginAdmin(false);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="container-fluid">
        <div className="col-12 login-bg">
          <form
            onSubmit={this.handleSubmit}
            className="rtl form-signin border rounded m-2 mx-auto bg-light shadow"
          >
            <h1 className="h6  mb-3 font-weight-bold">ورود ادمین</h1>
            <label htmlFor="inputEmail" className="sr-only">
              آدرس ایمیل
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="آدرس ایمیل"
              value={this.state.email}
              name="email"
              required
              autoFocus
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="inputPassword" className="sr-only">
              کلمه عبور
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="کلمه عبور"
              value={this.state.password}
              name="password"
              required
              onChange={e => this.handleChange(e)}
            />

            <button className="btn btn-lg btn-submit " type="submit">
              ورود
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer
  };
};
export default connect(
  mapStateToProps,
  { loginAdmin }
)(Login);
