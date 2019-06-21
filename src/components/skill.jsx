import React from "react";

const Skill = () => {
  return (
    <div className="container-fluid">
      <div className="card m-2">
        <p className="card-title text-center m-2">مهارت های من</p>
        <div className="card-body">
          لینوکس
          <div className="progress m-2">
            <div
              className="progress-bar bg-linux"
              role="progressbar"
              style={{ width: "75%" }}
            />
          </div>
          نود جی اس
          <div className="progress m-2">
            <div
              className="progress-bar bg-node"
              role="progressbar"
              style={{ width: "35%" }}
            />
          </div>
          ری اکت
          <div className="progress m-2">
            <div
              className="progress-bar bg-react"
              role="progressbar"
              style={{ width: "85%" }}
            />
          </div>
          ری اکت نیتیو
          <div className="progress m-2">
            <div
              className="progress-bar bg-native"
              role="progressbar"
              style={{ width: "60%" }}
            />
          </div>
          پایتون
          <div className="progress m-2">
            <div
              className="progress-bar bg-py"
              role="progressbar"
              style={{ width: "90%" }}
            />
          </div>
          پی اچ پی
          <div className="progress m-2">
            <div
              className="progress-bar bg-php"
              role="progressbar"
              style={{ width: "65%" }}
            />
          </div>
          جاوا اسکریپت
          <div className="progress m-2">
            <div
              className="progress-bar bg-js"
              role="progressbar"
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
