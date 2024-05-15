import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import data from "../../data/data.json";

export default function Swiper_card_2() {
  return (
    <div id="Swiper_2">
      <div className="d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-start px-lg-5 pt-4 pb-5 mx-3">
        <div className="">
          <h1 className="style-2 fw-bolder">FESTIVAL'S NEW</h1>
          <h1 className="style-2 fw-bolder mb-0">ARRIVALS</h1>
        </div>
        <button className="btn mt-lg-0 mt-3">VIEW ALL SHOES</button>
      </div>
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        centeredSlides
        centerInsufficientSlides
        centeredSlidesBounds
        className="mySwiper p-5"
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
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {data.map((list) => {
          return (
            <SwiperSlide className="" key={list.id}>
              <div className="d-flex justify-content-center">
                <div
                  className="card shoe-card-2 shadow"
                  style={{ background: `${list.backgroundColor}` }}
                >
                  <div className="imgBx">
                    <img src={list.image} className="img-fluid" />
                  </div>
                  <div className="contentBx">
                    <h2>{list.name}</h2>
                    <div className="color">
                      <h3>Current Price :</h3>
                      <p className="mb-2">{list.currentPrice}</p>
                    </div>
                    <div className="size">
                      <h3>Original Price :</h3>
                      <p className="mb-2 text-decoration-line-through">
                        {list.originalPrice}
                      </p>
                    </div>
                    <button className="btn rounded-pill">
                      <i className="fa-solid fa-bag-shopping me-1"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
