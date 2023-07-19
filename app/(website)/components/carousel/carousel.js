"use client";

import "./carousel.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import image1 from "@/public/image-1.jpeg";
import image2 from "@/public/image-2.jpg";
import image3 from "@/public/image-3.jpeg";
import image4 from "@/public/image-4.jpg";
import image5 from "@/public/image-5.jpg";
import image6 from "@/public/image-6.jpeg";
import image7 from "@/public/image-7.jpg";
import image8 from "@/public/image-8.jpeg";
import image9 from "@/public/image-9.jpg";

export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      navigation={true} 
      pagination={pagination}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      mousewheel={true}
      keyboard={true}
      cssMode={true}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Image
          src={image1}
          alt="Image1"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image2}
          alt="Image2"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image3}
          alt="Image3"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image4}
          alt="Image4"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image5}
          alt="Image5"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image6}
          alt="Image6"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image7}
          alt="Image7"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image8}
          alt="Image8"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image9}
          alt="Image9"
          quality={100}
        />
        <div>
          <h2></h2>
          <p></p>
          {/* Link */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}