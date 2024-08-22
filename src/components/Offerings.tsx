import React, { useState } from "react";
import "../styles/HoverCard.css";

const Offerings: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHoverReady, setReady] = useState(false);

  return (
    <section id="features">
      <div className="container">
        <div className="offering">
          <div className="mt-sm-4">
            <h2>
              <b>Dane's Offerings</b>
            </h2>
            <div className="offer_sub_title">
              Empower Your Security Strategy with Cutting-Edge Solutions
            </div>
          </div>
          <div className="offering_content mt-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 p-4">
                  <div
                    className={`card ${
                      isHovered
                        ? "hovered shadow content p-5 heigth_feature bg-white"
                        : "content  p-5 heigth_feature bg-white"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="card-content">
                      <div
                        className={`card-title ${
                          isHovered ? "title-hovered real_time" : "real_time"
                        }`}
                      >
                        Comprehensive Network Security Policy Management
                      </div>
                      <div className="real_time_description mt-4">
                        Dane offers a sophisticated platform for managing
                        network security policies, empowering organizations to
                        streamline policy creation, deployment, and auditing
                        processes with precision and efficiency.
                      </div>
                      <div className="min_height"></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-4">
                  <div
                    className={`card ${
                      isHovered1
                        ? "hovered shadow content p-5 heigth_feature bg-white"
                        : "content p-5 heigth_feature bg-white"
                    }`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    <div className="card-content">
                      <div
                        className={`card-title ${
                          isHovered1 ? "title-hovered real_time" : "real_time"
                        }`}
                      >
                        Automated Policy Analysis and Optimization
                      </div>
                      <div className="real_time_description mt-4">
                        Organizations can gain actionable insights into their
                        network security posture, identify vulnerabilities, and
                        prioritize corrective actions to mitigate risks
                        effectively.
                      </div>
                    </div>
                    <div className="min_height"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" col-sm-6 p-4">
                  <div
                    className={`card ${
                      isHovered2
                        ? "hovered shadow content p-5 heigth_feature bg-white"
                        : "content p-5 heigth_feature bg-white"
                    }`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <div className="card-content">
                      <div
                        className={`card-title ${
                          isHovered2 ? "title-hovered real_time" : "real_time"
                        }`}
                      >
                        Real-time Compliance Monitoring and Reporting
                      </div>
                      <div className="real_time_description mt-4">
                        Real-time monitoring and reporting functionalities,
                        enabling organizations to track compliance status,
                        identify deviations, and generate comprehensive reports
                        to ensure adherence to regulatory standards
                      </div>
                    </div>
                    <div className="min_height"></div>
                  </div>
                </div>
                <div className="col-sm-6 p-4">
                  <div
                    className={`card ${
                      isHovered3
                        ? "hovered shadow content p-5 heigth_feature bg-white"
                        : "content  p-5 heigth_feature bg-white"
                    }`}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  >
                    <div className="card-content">
                      <div
                        className={`card-title ${
                          isHovered3 ? "title-hovered real_time" : "real_time"
                        }`}
                      >
                        Seamless Integration with On-premises and Cloud
                        Environments
                      </div>
                      <div className="real_time_description mt-4">
                        Dane seamlessly integrates with both on-premises and
                        cloud environments, offering flexibility and scalability
                        to adapt to dynamic infrastructure requirements while
                        maintaining a robust security posture
                      </div>
                    </div>
                    <div className="min_height"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`offering_contact ${
              isHoverReady
                ? " hover_ready mt-5 m-3 p-4 content_left"
                : "offering_contact mt-5 m-3 p-4 content_left"
            }`}
            onMouseEnter={() => setReady(true)}
            onMouseLeave={() => setReady(false)}
          >
            <div className="row p-3">
              <div className="col-md-9 res">
                <h3>
                  <b>Ready to Elevate Your Security?</b>
                </h3>
                <div>
                  Enhance your defenses with Dane's comprehensive suite of
                  solutions
                </div>
              </div>
              <div className="col-md-3 content_right">
                <button
                  className={`btn_get ${isHoverReady ? "new_btn" : "button2"}`}
                  onMouseEnter={() => setReady(true)}
                  onMouseLeave={() => setReady(false)}
                >
                  Get Started <i className="fa fa-tv"></i>
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-sm-5 p-5">
            <h2>
              <b>Benefits of Dane Solution</b>
            </h2>
            <div className="offer_sub_title">
              Empower Your Security Strategy with Cutting-Edge Solutions
            </div>
            <div className="offer_sub_description mt-4">
              Discover the numerous benefits of integrating Dane into your
              cybersecurity strategy. From enhanced compliance to streamlined
              policy management, Dane empowers your team to stay ahead of
              evolving threats.
            </div>
          </div>
          <div className="offering_content mt-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="content p-5 m-3 heigth_feature bg-white offering_gradient">
                    <div className="icon"></div>
                    <div className="real_time">Enhanced Security Posture</div>
                    <div className="real_time_description mt-4">
                      Automate policy management for a stronger security
                      posture.
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="content p-5 m-3 bg-white offering_gradient">
                    <div className="real_time">
                      Increased Operational Efficiency
                    </div>
                    <div className="real_time_description mt-4">
                      Streamline policy processes for better resource
                      allocation.
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="content p-5 m-3 heigth_feature bg-white offering_gradient">
                    <div className="real_time">Actionable Insights</div>
                    <div className="real_time_description mt-4">
                      Gain real-time insights for informed decision-making.
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="content p-5 m-3 heigth_feature bg-white offering_gradient">
                    <div className="real_time">Scalability and Flexibility</div>
                    <div className="real_time_description mt-4">
                      Adapt to evolving needs with seamless integration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
