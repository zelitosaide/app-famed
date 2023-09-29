"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Link from "next/link";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

export default function Carousel({ news }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      pagination={pagination}
    >
      {news.map(function(news) {
        return (
          <SwiperSlide key={news._id}>
            <img
              src={`http://localhost:3001/${news.image}`}
              alt="Image3"
            />
            <div>
              <h2 className="text-[red]">{news.title}</h2>
              <p>{news.description}</p>
              <Link href={`/noticias/${news._id}`}>
                Ver mais <DoubleArrowRightIcon />
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}