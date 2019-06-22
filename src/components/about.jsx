import React from "react";
import PwrAbout from "./../images/PWR-About.png";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row m-2 bg-light border rounded shadow">
        <div className="col-7">
          <div className="card bg-light shadow mx-auto mt-4 mb-2">
            <p className="card-title m-2">محمد راد</p>
            <p className="card-body ">
              برنامه نویس و مقداری عجیب عاشق یادگیری و چالش های ذهنی و حل کردن
              مشکلات منظم و خوش قول از دیوانگان برنامه نویسی از طرفداران
              جاوااسکریپت و دوست دار خلق صفحات SPA با react و angular مسلط به
              ورژن کنترل git و توانایی کار با gitHub و gitLab و azure devops و
              ...
              <br />
              چند نمونه ی کاری برای رزومه در آدرس گیت هاب موجود است
              <br />
              <a
                className="card-body card-link"
                href="https://github.com/mohammadrad007"
                target="_blank"
                rel="noopener noreferrer"
              >
                گیت هاب
              </a>
            </p>
          </div>
        </div>
        <div className="col-5">
          <img className="img-fluid rounded mt-10 m-2" src={PwrAbout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
