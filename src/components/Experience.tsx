import React from "react";

const Experience: React.FC = () => {
  return (
    <>
      <section id="features">
        <div className=" mt-sm-5 section" id="testimonials">
          <h2>
            <b>
              Experience unparalleled efficiency, accuracy, and scalability in
              managing your network security policies with Dane's innovative
              platform.
            </b>
          </h2>
          <div className="offer_sub_title col-xl-3 col-12 mt-5">
            <button className="button1">
              Start your Dane's journey now <i className="fa fa-tv"></i>
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            className="p-5"
            src="images/logos.png"
            alt="logos"
            style={{ width: 1560 }}
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
