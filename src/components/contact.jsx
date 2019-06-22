import React from "react";

const Contact = () => {
  const mapObj = {
    key: "service.2nkmCxqFFajqbaBQdaQIue1bPFadjBemYzJB6agM",
    type: "neshan",
    zoom: 14,
    lat: "34.29476450",
    long: "47.03777477",
    width: 500,
    height: 400,
    marker: "red"
  };

  const mapUrl = `https://api.neshan.org/v2/static?key=${mapObj.key}&type=${
    mapObj.type
  }&zoom=${mapObj.zoom}&center=${mapObj.lat},${mapObj.long}&width=${
    mapObj.width
  }&height=${mapObj.height}&marker=${mapObj.marker}`;

  return (
    <div className="container-fluid">
      <div className="row bg-light border rounded m-2">
        <div className="col-lg-6 col-xl-6 col-md-12 mt-5 ">
          <form>
            <div className="card card-contact rounded m-2">
              <div className="card-header  p-0">
                <div className="bg-info card-contact-header text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope" />{" "}
                    <span className="card-contact-span">فرم تماس با من</span>
                  </h3>
                  <p className="m-0">
                    کافیه موارد زیر رو پر کرده و روی دکمه ارسال کلیک کنید
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-user text-info-concat" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      placeholder="نام و نام خانوادگی"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope text-info-concat" />
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="آدرس ایمیل"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-comment text-info-concat" />
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      placeholder="متن جهت ارسال"
                      required
                    />
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="ارسال"
                    className="btn btn-info-contact btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12">
          <p className="lead m-2" style={{ fontFamily: "vazir" }}>
            <span className="fa fa-envelope m-1" />
            اطلاعات تماس
          </p>
          <p className="m-2">
            <span className="fa fa-emvelope-open" />
            آدرس ایمیل:
            <span
              style={{ fontFamily: "'Pacifico', cursive" }}
              className="m-2 font-weight-bold"
            >
              Saberzx313@gmail.com
            </span>
          </p>
          <p className="m-2">
            <span className="fa fa-address-card m-2" />
            آدرس:
            <span style={{ fontFamily: "iransans" }} className="m-2">
              ایران کرمانشاه
            </span>
          </p>
          <img
            src={mapUrl}
            alt="نقشه مکان"
            className="img-fluid img-thumbnail m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
