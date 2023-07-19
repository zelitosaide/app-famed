"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.css";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
      modules={[Navigation, Pagination]}
      loop={true}
    >
      <SwiperSlide>
        <Image
          src={image1}
          alt="Image1"
          quality={100}
        />
        <div>
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
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
          <h2>Professor Catedrático Albertino Damasceno e sua equipa recebem Menção Honrosa -Prémio Bial</h2>
          <p>
            Professor Catedrático Albertino Damasceno da Faculdade de Medicina da Universidade Eduardo 
            Mondlane e médico cardiologista do Hospital Central de Maputo que ao longo de 25 anos trabalha 
            na investigação alargada sobre hipertensão arterial em Moçambique recebeu no dia 8 de Fevereiro 
            de 2023, a Mençã
          </p>
          {/* Link */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}