
import Header from "../Header/Header";

import MenuItemtop from "./MenuItemtop";
import img1 from "../../assets/drink.png";
import img2 from "../../assets/bar.png";
import img3 from "../../assets/spa.png";
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MainMenu.css";
const MainMenuHorizeintal = () => {
  const swiper = useSwiper();
  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={2} onMouseMove={() => swiper.slideNext()} className="mySwiper" >
      <SwiperSlide ><MenuItemtop img={img1} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img3} title="Pasta"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      <SwiperSlide ><MenuItemtop img={img2} title="Salad"/> </SwiperSlide>
      </Swiper>
      </>

  );
};

export default MainMenuHorizeintal;
