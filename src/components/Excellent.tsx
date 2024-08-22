import React from "react";

const Excellent: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2>
          <b>Ils nous ont fait confiance</b>
        </h2>
        <div className="row align-items-center mt-4 spec_center">
          <div className="col-md-4 text-center spec_width2">
            <div className="real_time">Excellent</div>
            <img src="images/stars-5.png" alt="start" className="p-2 " />
            <div className="total_review p-2 real_time_description">
              Based on <a href="">20921 reviews</a>
            </div>
            <img
              src="images/Truepilot.png"
              alt="Truepilot.png"
              className="spec_width"
            />
          </div>
          <div className="col-md-8 d-flex align-items-center ">
            <div className="col-sm-1">
              <i className="fa fa-arrow-circle-o-left fa-5x title_white"></i>
            </div>
            <div className="col-sm-10 p-3 d-flex spec_width3">
              <div className="col-sm-6 p-3 spec_width4">
                <div className="super d-flex justify-content-between">
                  <img
                    src="images/stars-5.png"
                    alt="star"
                    className="spec_width"
                  />
                  <div className="super_skill_data">4 days ago</div>
                </div>
                <div className="supername mt-3">
                  <div className="super_skill ">
                    <div className="super_skill_name content_left">
                      Super Experience
                    </div>
                  </div>
                  <div className="super_content content_left text_12 mt-3">
                    Donec in nisl at nunc finibus dapibus ac nec tellus. Vivamus
                    at mi sit amet diam vestibulum euismod. Mauris risus orci,
                    commodo at placerat.
                  </div>
                  <div className="super_name content_left mt-3 text_12">
                    <b>Gmarellile M.</b>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3 spec_width4">
                <div className="super d-flex justify-content-between">
                  <img
                    src="images/stars-5.png"
                    alt="star"
                    className="spec_width"
                  />
                  <div className="super_skill_data">4 days ago</div>
                </div>
                <div className="supername mt-3">
                  <div className="super_skill ">
                    <div className="super_skill_name content_left">
                      Super Experience
                    </div>
                  </div>
                  <div className="super_content content_left text_12 mt-3">
                    Donec in nisl at nunc finibus dapibus ac nec tellus. Vivamus
                    at mi sit amet diam vestibulum euismod. Mauris risus orci,
                    commodo at placerat.
                  </div>
                  <div className="super_name content_left mt-3 text_12">
                    <b>Gmarellile M.</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-1">
              <i className="fa fa-arrow-circle-o-right title_white"></i>
            </div>
          </div>
        </div>
        <div className="row content_left mt-4" id="testimonials">
          <div className="col-md-6 p-4 ">
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="images/avatar3.png"
                  className="img_avatar"
                  alt="Rectangle"
                />
              </div>
              <div className="col-md-10 spec_margin_left">
                <div className="dev_nav">
                  <b>Suzane Delapière</b>
                </div>
                <div className="mt-1">Cybersec Expert @ Company</div>
              </div>
            </div>
            <div className="real_time_description mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam justo urna, a porttitor diam molestie vel. In
              a elit lacus. Nullam in iaculis neque. Quisque fermentum blandit
              euismod.
            </div>
          </div>
          <div className="col-md-6 p-4 ">
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="images/avatar1.png"
                  className="img_avatar"
                  alt="Rectangle"
                />
              </div>
              <div className="col-md-10 spec_margin_left">
                <div className="dev_nav">
                  <b>Jacob Swittar</b>
                </div>
                <div className="mt-1">Cybersec Expert @ Company</div>
              </div>
            </div>
            <div className="real_time_description mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam justo urna, a porttitor diam molestie vel. In
              a elit lacus. Nullam in iaculis neque. Quisque fermentum blandit
              euismod.
            </div>
          </div>
        </div>
        <div className="row content_left " id="testimonials">
          <div className="col-md-6 p-4 ">
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="images/avatar2.png"
                  className="img_avatar"
                  alt="Rectangle"
                />
              </div>
              <div className="col-md-10 spec_margin_left">
                <div className="dev_nav">
                  <b>John Shein Do</b>
                </div>
                <div className="mt-1">Cybersec Expert @ Company</div>
              </div>
            </div>
            <div className="real_time_description mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam justo urna, a porttitor diam molestie vel. In
              a elit lacus. Nullam in iaculis neque. Quisque fermentum blandit
              euismod.
            </div>
          </div>
          <div className="col-md-6 p-4 ">
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="images/avatar4.png"
                  className="img_avatar"
                  alt="Rectangle"
                />
              </div>
              <div className="col-md-10 spec_margin_left">
                <div className="dev_nav">
                  <b>Kawtar Brahim</b>
                </div>
                <div className="mt-1">Cybersec Expert @ Company</div>
              </div>
            </div>
            <div className="real_time_description mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam justo urna, a porttitor diam molestie vel. In
              a elit lacus. Nullam in iaculis neque. Quisque fermentum blandit
              euismod.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellent;
