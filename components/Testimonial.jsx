"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="w-full flex justify-center">
        <div className="max-w-[450px] z-10">
          <h1 className="text-5xl font-bold">Client Testimonial</h1>
          <p className="my-5 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            earum sed harum voluptate eaque nam fugit similique odit doloremque
            deleniti?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex flex-wrap -space-x-2 overflow-hidden">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://th.bing.com/th/id/R.24d2fcc88bbb1152946614c08628d3db?rik=%2f8916IQiL95ERQ&pid=ImgRaw&r=0"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://tse2.mm.bing.net/th?id=OIP.tYrpl6abrH2OfmTeeuIrxgHaHa&w=1024&h=1024&rs=1&pid=ImgDetMain"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://tse1.mm.bing.net/th?id=OIP.ixz1T24YmHrYv5azBcaDvAAAAA&w=450&h=450&rs=1&pid=ImgDetMain"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://tse2.mm.bing.net/th?id=OIP.ASLoRN4OJuFvBtnsVHA4mAAAAA&w=450&h=450&rs=1&pid=ImgDetMain"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://tse4.mm.bing.net/th?id=OIP.KwOgGJY10AmiG5NPnPctsgHaHa&w=500&h=500&rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="boder-none sm:border-l-2 border-black sm:pl-8">
              <div className="flex justify-center sm:justify-start">
                <h3 className="text-2xl font-semibold mr-2">4.6</h3>

                <img
                  className="w-5"
                  src="https://www.svgrepo.com/show/513354/star.svg"
                  alt="stars-icon"
                />
              </div>
              <div>
                <h3 className="text-sm">Rated by 25k on google.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          840: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/girl1.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Sarah
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/girl2.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Kathrin
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/man.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Kaveh
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/girl1.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Sarah
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/girl2.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Kathrin
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-all duration-300 rounded-md m-6 max-md:m-10 !w-[300px]">
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <Image
              width={300}
              height={300}
              src="/man.png"
              alt="Laptop"
              className="bg-gray-200 h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  About Kaveh
                </h1>
                <div className="flex ms-3">
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                  <Star width={20} className="text-yellow-500" />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
