"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-28 max-md:py-2 !overflow-x-hidden">
      <div className={`max-w-7xl mx-auto`}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // cssMode={true}
          // navigation={true}
          // pagination={{ clickable: true }}
          // mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // keyboard={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={`container`}>
              <div className="grid grid-cols-2 max-md:grid-cols-1">
                <div className="relative place-self-center max-md:order-2">
                  <div className="flex">
                    <h1
                      className="text-7xl font-bold max-md:ps-2"
                      data-aos="fade-right"
                    >
                      Cofee Shop{" "}
                    </h1>
                    <Image
                      data-aos="fade-left"
                      src={`/cafe.png`}
                      width={80}
                      height={80}
                      alt="cofee"
                    />
                  </div>
                  <p className="mt-6 max-md:ps-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus modi quidem accusamus debitis dolor
                    exercitationem minima ullam voluptates atque suscipit!
                  </p>
                  <div className="flex gap-6 py-6 px-1">
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      DOWNLOAD APP
                    </Button>
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                      variant="outline"
                      data-aos="fade-right"
                    >
                      Shop Cofee
                    </Button>
                  </div>
                </div>
                <div className="relative max-md:order-1" data-aos="fade-left">
                  <Image
                    src={`/hero1.png`}
                    width={600}
                    height={600}
                    alt="hero"
                  />
                  <div className="absolute top-10 right-10">
                    <Image
                      src={`/cafe.png`}
                      width={120}
                      height={120}
                      alt="cofee"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`container`}>
              <div className="grid grid-cols-2 max-md:grid-cols-1">
                <div className="relative place-self-center max-md:order-2">
                  <div className="flex">
                    <h1 className="text-7xl font-bold max-md:ps-2">
                      Cofee Shop{" "}
                    </h1>
                    <Image
                      src={`/cafe.png`}
                      width={80}
                      height={80}
                      alt="cofee"
                    />
                  </div>
                  <p className="mt-6 max-md:ps-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus modi quidem accusamus debitis dolor
                    exercitationem minima ullam voluptates atque suscipit!
                  </p>
                  <div className="flex gap-6 py-6 px-1">
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                    >
                      DOWNLOAD APP
                    </Button>
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                      variant="outline"
                    >
                      Shop Cofee
                    </Button>
                  </div>
                </div>
                <div className="relative max-md:order-1">
                  <Image
                    src={`/hero1.png`}
                    width={600}
                    height={600}
                    alt="hero"
                  />
                  <div className="absolute top-10 right-10">
                    <Image
                      src={`/cafe.png`}
                      width={120}
                      height={120}
                      alt="cofee"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`container`}>
              <div className="grid grid-cols-2 max-md:grid-cols-1">
                <div className="relative place-self-center max-md:order-2">
                  <div className="flex">
                    <h1 className="text-7xl font-bold max-md:ps-2">
                      Cofee Shop{" "}
                    </h1>
                    <Image
                      src={`/cafe.png`}
                      width={80}
                      height={80}
                      alt="cofee"
                    />
                  </div>
                  <p className="mt-6 max-md:ps-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus modi quidem accusamus debitis dolor
                    exercitationem minima ullam voluptates atque suscipit!
                  </p>
                  <div className="flex gap-6 py-6 px-1">
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                    >
                      DOWNLOAD APP
                    </Button>
                    <Button
                      className={`shadow-lg hover:scale-105 transition-all`}
                      variant="outline"
                    >
                      Shop Cofee
                    </Button>
                  </div>
                </div>
                <div className="relative max-md:order-1">
                  <Image
                    src={`/hero1.png`}
                    width={600}
                    height={600}
                    alt="hero"
                  />
                  <div className="absolute top-10 right-10">
                    <Image
                      src={`/cafe.png`}
                      width={120}
                      height={120}
                      alt="cofee"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
