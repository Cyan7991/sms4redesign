import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container title_btn_group">
        <div className="row">
          <div className="col-sm-6 content_left">
            <div className="offer_sub_title">
              <b>Dane</b>
            </div>
            <div className="dd">
              Dane offre une gamme complète de solutions de cybersécurité
              conçues pour protéger votre entreprise contre les menaces
              informatiques.
            </div>
          </div>
          <div className="col-sm-3 content_left">
            <div className="dom p-3">
              <div className="mt-1">
                <b>Cyberdian Groupe Adresss</b>
              </div>
              <div className="mt-1">50 rue d’Hauteville</div>
              <div className="mt-1">75010 PARIS</div>
              <div className="mt-1">support@bettersoc.fr</div>
              <div className="mt-1">01 76 34 20 99</div>
            </div>
          </div>
          <div className="col-sm-3 content_left">
            <div className="dom p-3">
              <div>
                <b>Product</b>
              </div>
              <div className="mt-1">
                <b>Solutions</b>
              </div>
              <div className="mt-1">
                <b>Pricing</b>
              </div>
              <div className="mt-1">
                <b>About us</b>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 align-content-center">
          <div className="col-sm-6 content_left d-flex">
            <i className="fa fa-instagram fa-2x"></i>
            <i className="fa fa-facebook-f fa-2x spec_margin_left"></i>
            <i className="fa fa-linkedin fa-2x spec_margin_left"></i>
            <i className="fa fa-youtube fa-2x spec_margin_left"></i>
          </div>
          <div className="col-sm-6">
            <div className="container mt-3">
              <div className="row">
                <div className="col align-items-center">
                  <div className="content_left">Subscribe to ou newsletter</div>
                  <div className=" mt-2" style={{ maxWidth: "400px" }}>
                    <input
                      type="text"
                      className="input form-control"
                      id="searchInput"
                      placeholder="Write your email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new"> </div>
      <div className="footer p-3">
        <span>&copy; 2023 Company</span>
        <span>Legal notices - General conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
