import React from "react";
import { motion } from "framer-motion";
import data from "../../data/data.json";

export default function Summer_Collection({ currentIndex }) {
  return (
    <div className="container-fluid my-5">
      <div className="container-xxl px-lg-5 p-0">
        <div className="row mx-0">
          <div className="col-12 px-lg-2 px-0">
            <div className="card collection_card p-4">
              <div className="row mx-0 gap-4">
                <div className="col-lg col-12 p-0">
                  <div className="card border border-5 border-white img_1 h-100">
                    <motion.img
                      key={data[currentIndex].id}
                      initial={{
                        opacity: 0,
                        y: -150,
                      }}
                      animate={{ opacity: 1, y: -0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      exit={{ opacity: 0, y: -150 }}
                      src={data[currentIndex].image}
                      className="img-fluid hero-img"
                    />
                  </div>
                </div>
                <div className="col-lg col-12 p-0 d-flex flex-column justify-content-between">
                  <div className="card p-4 collection_card_child mb-4">
                    <h1 className="text-white display-5 style-2">SUMMER</h1>
                    <h1 className="text-white display-5 style-2">COLLECTION</h1>
                    <p className="mb-2 text-secondary">
                      <span className="text-white">****</span> WE HAVE A LOT OF
                      TRENDY SHOES WITH HOT SALE IN SUMMER COLLECTION
                    </p>
                  </div>
                  <div className="row mx-0 gap-4">
                    <div className="col p-0">
                      <div className="card collection_card_child border-0 h-100">
                        <img
                          src="/football-injuries.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-3 p-0">
                      <div className="card h-100 arrow-card d-flex justify-content-center align-items-center p-4">
                        <motion.i
                          whileInView={{ rotate: "45deg" }}
                          whileHover={{ rotate: "90deg" }}
                          className="fa-solid fa-arrow-up-long z-3 h1 display-3 text-white"
                        ></motion.i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
