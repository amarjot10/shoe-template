import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid px-lg-5 bg-black footer">
      <footer className="pt-5 px-lg-3">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white fs-4 fw-semibold mb-3">Gift cards</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Promotions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Journal
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Send us feedback
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Become a member
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white fs-4 fw-semibold mb-3">Get help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Payment options
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Returns
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Order cancellation
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white fs-4 fw-semibold mb-3">About us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  News
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Purpose
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="text-decoration-none p-0 text-white-50 small"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-lg-3 mt-3">
            <ul className="list-unstyled d-flex justify-content-lg-end justify-content-start gap-4">
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter text-white fs-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram text-white fs-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook text-white fs-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube text-white fs-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top border-secondary border-opacity-50">
          <p className="mb-0 text-white-50">
            © 2024 Company, Inc. All rights reserved.
          </p>
          <div className="row mx-0 gap-4 mt-lg-0 mt-3">
            <a
              href="#"
              className="col-lg-auto col-5 text-decoration-none text-white"
            >
              Guids
            </a>
            <a
              href="#"
              className="col-lg-auto col-5 text-decoration-none text-white"
            >
              Terms of Sale
            </a>
            <a
              href="#"
              className="col-lg-auto col-5 text-decoration-none text-white"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="col-lg-auto col-5 text-decoration-none text-white"
            >
              Privacy and Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
