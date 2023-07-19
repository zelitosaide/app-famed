"use client";

import "./carousel.css";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "@/public/image-1.jpeg";

export default function Carousel() {
  return (
    <Swiper>
      <SwiperSlide>
        <Image
          src={image1}
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