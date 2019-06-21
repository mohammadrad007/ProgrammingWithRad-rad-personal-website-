import React from "react";

const Education = () => {
  return (
    <div className="container-fluid">
      <div className="card m-2">
        <p className="card-title text-center m-2">تحصیلات من</p>

        <div className="card-body">
          <ul className="list-group">
            <li className="lead list-unstyled">
              <span className="fa fa-graduation-cap" /> تحصیلات
            </li>
            <br />
            <li>دیپلم : رشته ریاضی فیزیک دبیرستان توکل مومنی کرمانشاه</li>
            <li>فوق دیپلم: رشته کامپیوتر گرایش نرم افزار دانشگاه صنعتی</li>
            <li>لیسانس: رشته کامیپوتر گرایش نرم افزار دانشگاه صنعتی</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
