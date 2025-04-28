"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
    { src: "images/my-portfolio-slider-1.jpg", alt: "Laptop 1" },
    { src: "images/my-portfolio-slider-2.jpg", alt: "Laptop 2" },
    { src: "images/my-portfolio-slider-3.jpg", alt: "Laptop 3" },
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        fadeEffect={{
          crossFade: true,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[100vh] bg-cover bg-center -z-10"
              style={{ backgroundImage: `url(${slide.src})` }}
              role="img"
              aria-label={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 absolute inset-0 bg-black/50 flex flex-col items-center gap-4 justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
          Bienvenue dans mon univers de développement web
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
          Découvrez mes compétences et mon expérience
        </h2>
      </div>
    </section>
  );
}
