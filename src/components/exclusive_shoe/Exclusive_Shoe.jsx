import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper/modules";

export default function Exclusive_Shoe() {
  return (
    <div id="background-img" className="row mx-0 mt-lg-4">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[A11y, FreeMode]}
          autoHeight={true}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="h-100">
            <div className="d-flex justify-content-center h-100">
              <button className="shop-now-btn">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  Shop Now <i class="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex align-itmes-center justify-content-center h-100">
              <h3 className="style-2 text-white d-flex align-items-center mb-0">
                Exclusive Shoe
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex justify-content-center h-100">
              <button className="shop-now-btn">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  Shop Now <i class="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex align-itmes-center justify-content-center h-100">
              <h3 className="style-2 text-white d-flex align-items-center mb-0">
                Exclusive Shoe
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex justify-content-center h-100">
              <button className="shop-now-btn">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  Shop Now <i class="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex align-itmes-center justify-content-center h-100">
              <h3 className="style-2 text-white d-flex align-items-center mb-0">
                Exclusive Shoe
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex justify-content-center h-100">
              <button className="shop-now-btn">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  Shop Now <i class="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-100">
            <div className="d-flex align-itmes-center justify-content-center h-100">
              <h3 className="style-2 text-white d-flex align-items-center mb-0">
                Exclusive Shoe
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
