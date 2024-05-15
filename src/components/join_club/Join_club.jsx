import React from "react";

export default function Join_club() {
  return (
    <div className="row mx-0 mt-lg-4 mb-lg-5 my-5 w-100 join-club">
      <div className="col-lg-9 col-12 mx-auto">
        <div className="card p-lg-5 p-4 rounded-5 bg-white shadow">
          <div className="d-flex gap-lg-5 gap-4 flex-lg-row flex-column align-items-lg-center align-items-start justify-content-around">
            <img src="/nike.png" className="img-fluid" width={100} alt="" />
            <div className="">
              <h1 className="style-2">Join our Club</h1>
              <p className="mb-0 text-secondary">
                To know about discounts and new styles write down your Email
                Address
              </p>
              <div className="form-control rounded-pill mt-4 d-flex py-2 ps-3">
                <input
                  type="email"
                  className="form-control rounded-pill border-0 p-2"
                  style={{ boxShadow: "none" }}
                  placeholder="Enter your Email Address"
                />
                <button className="btn bg-dark text-white px-5">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
