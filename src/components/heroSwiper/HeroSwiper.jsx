import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import data from "../../data/data.json";

export default function HeroSwiper({ handleSlideChange, currentIndex }) {
  return (
    <>
      <div className="ms-lg-5 mt-4 position-absolute z-3 d-lg-block d-none">
        <div className="ms-lg-5 ms-4">
          <motion.h1
            key={data[currentIndex].id}
            initial={{ opacity: 0, fontSize: "4.5rem", x: -150 }}
            animate={{ opacity: 1, fontSize: "4.5rem", x: -0 }}
            transition={{ type: "ease-out" }}
            exit={{ opacity: 0, x: -150 }}
            className="text-black text-uppercase w-75 mb-0"
          >
            {data[currentIndex].name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ type: "ease-out" }}
            exit={{ opacity: 0, x: -150 }}
            className=""
          >
            <div className="d-flex gap-1">
              <i className="fa-solid fa-star fs-5 text-warning"></i>
              <i className="fa-solid fa-star fs-5 text-warning"></i>
              <i className="fa-solid fa-star fs-5 text-warning"></i>
              <i className="fa-solid fa-star fs-5 text-warning"></i>
              <i className="fa-solid fa-star fs-5 text-black text-opacity-25"></i>
            </div>
            <motion.div className="mt-4 d-flex">
              <motion.h3
                whileInView={{ cursor: "pointer", color: "#000" }}
                className=" fw-bolder d-flex align-items-center gap-3 mb-0"
              >
                {data[currentIndex].currentPrice}
                <motion.p className="text-decoration-line-through text-secondary mb-0 h5">
                  {data[currentIndex].originalPrice}
                </motion.p>
              </motion.h3>
            </motion.div>
            <div className="position-relative z-3 d-flex gap-3 mt-4">
              <motion.button
                className="btn px-4"
                whileInView={{ backgroundColor: "black", color: "white" }}
              >
                <i className="fa-solid fa-cart-shopping me-2"></i> Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: -0 }}
        transition={{ type: "ease-out" }}
        exit={{ opacity: 0, x: -150 }}
        className="position-absolute hero-bg-img"
      >
        <motion.img
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: -0 }}
          transition={{ type: "ease-out" }}
          exit={{ opacity: 0, x: -150 }}
          id={data[currentIndex].id}
          src={data[currentIndex].bg_image}
          className="img-fluid"
          alt=""
        />
      </motion.div>
      <div id="Swiper">
        <Swiper
          modules={[A11y, Navigation, Autoplay]}
          navigation
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
        >
          {data.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <motion.div
                  whileInView={{ marginTop: "-40px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <motion.img
                    initial={{ y: "-10000", opacity: 0 }}
                    animate={{ opacity: 1, x: 20, y: 15 }}
                    whileHover={{ scale: 1.2, rotate: "25deg" }}
                    whileTap={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    src={data.image}
                    className="img-fluid m-auto hero-img"
                    width={600}
                    alt="Shoe"
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
