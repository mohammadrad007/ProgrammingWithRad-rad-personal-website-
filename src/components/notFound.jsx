import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <React.Fragment>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>شرمنده همچین صفحه ایی نداریم</h2>

          <div>
            <Link to="/">
              <span className="arrow" />
              برگشت به صفحه اصلی
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <span className="arrow2" />
              یا اگر فکر میکنی سایت به همچین صفحه ای نیاز داره و باید باشه با من
              در میان بذار <br />
              ارتباط با من
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
