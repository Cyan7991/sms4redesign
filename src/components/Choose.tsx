import React from "react";

const Choose: React.FC = () => {
  return (
    <section id="choose">
      <div className="row bg">
        <div className="col-sm-6 align-content-center choose">
          <div className="">
            <div className="choose_font">
              <b>Why choose Dane</b>
            </div>
          </div>
          <div className="offer_sub_title ">
            Elevate Your Network Security Strategy with Dane
          </div>
          <div className="real_time_description mt-5">
            Dane stands apart as the leading solution for comprehensive network
            security policy management, offering unmatched capabilities to
            streamline policy creation, deployment, and auditing processes while
            ensuring compliance and fortifying your digital infrastructure
            against cyber threats.
          </div>
          <div className="d-flex mt-5">
            <button className="button-group1">
              Request a Demo <i className="fa fa-tv"></i>
            </button>
            <button className="button-group1">
              Learn More <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-sm-5 image content_right align-content-center justify-content-center">
          <img
            src="images/Group 1000004396.png"
            className="image1 mt-2"
            alt="frame"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
