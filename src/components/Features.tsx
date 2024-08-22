import React from "react";

const Features: React.FC = () => {
  return (
    <div>
      <section id="testimonials">
        <div className=" mt-sm-5">
          <h2>
            <b>Unlock the power of Dane Features</b>
          </h2>
          <div className="offer_sub_title">
            Experience the ease and efficiency of Dane's platform features
            today.
          </div>
        </div>
      </section>
      <div className="experience">
        <div className="row align-items-center">
          <div className="col-sm-6 overflow-hidden ">
            <div className="text-center special">
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">Automated Policy Analysis</div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">
                  Real-time Compliance Monitoring
                </div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">
                  Centralized Policy Repository
                </div>
              </button>
              <button type="button" className="button-group active">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1 ">Customizable Reporting</div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">
                  Integration with SIEM Solutions
                </div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">
                  Integration with SIEM Solutions
                </div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">Policy Change Tracking</div>
              </button>
              <button type="button" className="button-group">
                <i className="fa fa-check pull-left p-2 text-center"></i>
                <div className="pull-left p-1">Cloud-native Architecture</div>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <img src="images/image.png" className="image" alt="frame" />
          </div>
        </div>
        <div>
          <div className="row" id="testimonials">
            <div className="col-md-9 align-content-center">
              <div className="special_font">
                Ready to improve your security with Dane and benefit from a
                comprehensive feature set?
              </div>
            </div>
            <div className="col-md-3 col-sm-12 content_right p-5">
              <button className="button1">
                Get Started right now ! <i className="fa fa-tv"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
