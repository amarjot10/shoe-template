import "../assets/style.css";
import HomeNav from "../components/HomeNav";
import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import HeroSwiper from "../components/heroSwiper/HeroSwiper";
import Swiper_card_1 from "../components/swiper_card_1/Swiper_card_1";
import Swiper_card_2 from "../components/swiper_card_2/Swiper_card_2";
import Summer_Collection from "../components/summer_collection/Summer_Collection";
import data from "../data/data.json";
import Footer from "../components/Footer";
import Join_club from "../components/join_club/Join_club";
import Exclusive_Shoe from "../components/exclusive_shoe/Exclusive_Shoe";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    const body = document.body;
    const backgroundId = document.getElementById("background");
    const colors = ["#afe3d2", "#d9d3d2", "#bfe523", "#e4e4e4", "#cfcfcf"];
    body.classList.add("color-transition");
    backgroundId.classList.add("color-transition");

    setTimeout(() => {
      body.style.backgroundColor = colors[activeSlideIndex];
    }, 100);

    setCurrentIndex(swiper.activeIndex);
  };

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <div id="background" className="container-fluid position-relative px-0">
        <HomeNav />

        <div className="container-xxl p-0">
          <HeroSwiper
            handleSlideChange={handleSlideChange}
            currentIndex={currentIndex}
            data={data}
          />
          <Swiper_card_1 data={data} scale={scale} />

          <Summer_Collection currentIndex={currentIndex} />

          <Swiper_card_2 />

          <Exclusive_Shoe />
        </div>
        <div className="position-relative">
          <Join_club />
          <Footer />
        </div>
      </div>
    </>
  );
}
