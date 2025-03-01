import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Explore = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto py-12 relative bg-gray-50 !overflow-x-hidden">
        <div className="absolute -left-[120px] top-10" data-aos="fade-right">
          <Image
            className="scale-x-[-1]"
            src={`/alowishus-coffee.png`}
            width={300}
            height={400}
            alt="cofee"
          />
        </div>
        <div className="max-w-[450px] z-10 max-md:px-2 max-md:bg-white">
          <h1 className="text-5xl font-bold" data-aos="fade-right">
            Explore Our Items
          </h1>
          <p className="my-5 text-wrap" data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            earum sed harum voluptate eaque nam fugit similique odit doloremque
            deleniti?
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-9 max-lg:!max-w-[420px] z-10">
          <div
            className="flex flex-col rounded-2xl max-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white"
            data-aos="zoom-in-up"
            // data-aos-delay="200"
          >
            <h3 className="text-3xl font-semibold my-3">Ice Cream</h3>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
              consectetur.
            </p>
            <div className="flex flex-col items-center">
              <Image
                className="my-6"
                src={`/icon3.png`}
                alt="ice cream"
                width={100}
                height={100}
              />
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                More
              </Button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl max-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-semibold my-3">Ice Cream</h3>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
              consectetur.
            </p>
            <div className="flex flex-col items-center">
              <Image
                className="my-6"
                src={`/icon3.png`}
                alt="ice cream"
                width={100}
                height={100}
              />
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                More
              </Button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl max-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <h3 className="text-3xl font-semibold my-3">Ice Cream</h3>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
              consectetur.
            </p>
            <div className="flex flex-col items-center">
              <Image
                className="my-6"
                src={`/icon3.png`}
                alt="ice cream"
                width={100}
                height={100}
              />
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
