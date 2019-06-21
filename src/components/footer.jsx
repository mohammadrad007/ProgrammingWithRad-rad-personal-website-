import React from "react";
import PWR from "./../images/PWR.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rtl float-left  navbar navbar-dark bg-dark col-md-9 ml-sm-auto col-lg-10 mb-2 px-4 footer shadow">
      <div className="container mt-5">
        <div className="col-12 copyright">
          <span className="fa fa-copyright m-1" />
          تمامی حقوق این سایت محفوظ می باشد
        </div>
        <div className="col-8 social-media">
          <span>
            <i className="fa fa-hashtag" />
          </span>
          <h4>از طریق شبکه های اجتماعی با من در ارتباط باشید</h4>
          <div className="col-6">
            <ul>
              <li>
                <span>
                  <a>
                    <i className="fa fa-twitter" />
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a>
                    <i className="fa fa-envelope" />
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="https://web.telegram.org/reasercher_of_islam">
                    <i className="fa fa-telegram" />
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a>
                    <i className="fa fa-instagram" />
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a>
                    <i className="fa fa-github" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <img
            className="img-fluid img-filter"
            style={{ display: "inline-block" }}
            src={PWR}
            alt="PWR ProgramminWithRad"
          />
        </div>
        <div className="col-12 footer-menu">
          <h6>مهم های سایت</h6>
          <ul>
            <li>
              <Link to="/">
                <span className="fa fa-home feather" />
                <span className="m-2">صفحه اصلی</span>
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <span className="fa fa-graduation-cap feather" />
                <span className="m-2">دوره ها</span>
              </Link>
            </li>
            <li>
              <Link to="/skill">
                <span className="fa fa-briefcase feather" />
                <span className="m-2">مهارت های من</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="fa fa-user feather" />
                <span className="m-2">درباه من</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="fa fa-envelope feather" />
                <span className="m-2">تماس</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <div className="footer-content">
            <p>
              تمامی حقوق این وب سایت برای طراح آن محفوظ میباشد <br /> هرگونه کپی
              برداری از قالب های سایت ممنوع و کپی برداری از مطالب سایت با ذکر
              منبع فاقد اشکال می باشد
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
