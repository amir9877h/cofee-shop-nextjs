import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const SellingCoffee = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto py-16 relative bg-gray-50 !overflow-hidden">
        <div className="max-w-[450px] z-10 max-md:px-2">
          <h1 className="text-5xl font-bold" data-aos="fade-right">
            Best Selling Coffee
          </h1>
          <p
            className="my-5 text-wrap"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            earum sed harum voluptate eaque nam fugit similique odit doloremque
            deleniti?
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-9 max-lg:!max-w-[420px] z-10">
          <div
            className="flex flex-col rounded-2xl max-w-[400px] min-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white mt-52"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex">
              <div className="max-w-[50%]">
                <p className="my-3">#1 Selling</p>
                <h3 className="text-3xl font-semibold my-3">Double Espresso</h3>
              </div>
              <div className="w-[50%] relative">
                <Image
                  className="absolute w-full bottom-10 h-[300px] object-cover"
                  src={`/mid1.png`}
                  alt="ice cream"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              voluptas? Nihil atque pariatur omnis laudantium eaque libero
              recusandae! Dicta, quas!
            </p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold my-3">$ 59.99</p>
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                Order Now
              </Button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl max-w-[400px] min-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white mt-52"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex">
              <div className="max-w-[50%]">
                <p className="my-3">#1 Selling</p>
                <h3 className="text-3xl font-semibold my-3">Double Espresso</h3>
              </div>
              <div className="w-[50%] relative">
                <Image
                  className="absolute w-full bottom-10 h-[300px] object-cover"
                  src={`/mid2.png`}
                  alt="ice cream"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              voluptas? Nihil atque pariatur omnis laudantium eaque libero
              recusandae! Dicta, quas!
            </p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold my-3">$ 59.99</p>
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                Order Now
              </Button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl max-w-[400px] min-w-[400px] p-6 shadow-md hover:scale-105 transition-all duration-300 bg-white mt-52"
            data-aos="fade-up"
          >
            <div className="flex">
              <div className="max-w-[50%]">
                <p className="my-3">#1 Selling</p>
                <h3 className="text-3xl font-semibold my-3">Double Espresso</h3>
              </div>
              <div className="w-[50%] relative">
                <Image
                  className="absolute w-full bottom-10 h-[300px] object-cover"
                  src={`/mid3.png`}
                  alt="ice cream"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              voluptas? Nihil atque pariatur omnis laudantium eaque libero
              recusandae! Dicta, quas!
            </p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold my-3">$ 59.99</p>
              <Button className="rounded-3xl shadow-lg hover:scale-105 transition-all">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingCoffee;
