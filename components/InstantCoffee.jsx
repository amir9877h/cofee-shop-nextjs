import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const InstantCoffee = () => {
  return (
    <>
      <div className="bg-gray-100 py-16 max-lg:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center">
            <div className="max-lg:order-2">
              <h1 className="text-5xl font-bold max-md:mt-10" data-aos="fade-up">
                Instant Coffee At Your Home
              </h1>
              <p
                className="my-5 text-wrap"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                earum sed harum voluptate eaque nam fugit similique odit
                doloremque deleniti?
              </p>
              <Button
                className="rounded-3xl shadow-lg hover:scale-105 transition-all"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Order Now
              </Button>
            </div>
            <div className="flex relative max-lg:max-w-[400px]">
              <Image
                className="absolute h-[500px]"
                src={`/hand-drawn.png`}
                width={600}
                height={600}
                alt="ring"
                data-aos="fade-left"
              />
              <div className="flex" data-aos="fade-left" data-aos-delay="300">
                <Image
                  className="border-2 rounded-2xl border-gray-100 -rotate-12 z-[1] translate-x-1/4"
                  src={`/coffee-banner.png`}
                  alt="banner"
                  width={250}
                  height={250}
                />
                <Image
                  className="border-2 rounded-2xl border-gray-100 z-[2] -translate-x-1/4"
                  src={`/coffee-banner.png`}
                  alt="banner"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantCoffee;
