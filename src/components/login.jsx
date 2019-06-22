import React, { Component } from "react";
import { toast } from "react-toastify";

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
      this.props.history.push("/admin");
    } else {
      return toast.error("پسورد یا ایمیل نا معتبر است");
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
export default Login;
