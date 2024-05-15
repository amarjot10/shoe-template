import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import data from "../../data/data.json";

export default function Swiper_card_1({ scale }) {
  return (
    <div id="Swiper_2" className="position-relative z-3 mt-lg-0 mt-5">
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper px-lg-5 pb-lg-5 pt-lg-4 px-4 py-5 mx-lg-3"
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {data.map((list) => {
          return (
            <SwiperSlide className="" key={list.id}>
              <motion.div
                style={{ scale }}
                className="card h-100 hero-card d-flex flex-row shadow border-0 rounded-4 shoe-card"
              >
                <img src={list.image} className="img-fluid" alt="" />
                <div className="card-body">
                  <h5 className="fw-bolder style">{list.name}</h5>
                  <motion.div
                  // style={{
                  //   scaleY: scrollYProgress,
                  // }}
                  >
                    <div className="d-flex gap-1">
                      <i className="fa-solid fa-star small text-warning"></i>
                      <i className="fa-solid fa-star small text-warning"></i>
                      <i className="fa-solid fa-star small text-warning"></i>
                      <i className="fa-solid fa-star small text-warning"></i>
                      <i className="fa-solid fa-star small text-black text-opacity-25"></i>
                    </div>
                    <div className="d-flex gap-2 align-items-center mt-2">
                      <p className="mb-0 fw-bold fs-6">{list.currentPrice}</p>
                      <p className="text-decoration-line-through small mb-0 text-secondary">
                        {list.originalPrice}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
