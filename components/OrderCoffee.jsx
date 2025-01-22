import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const OrderCoffee = () => {
  return (
    <>
      <div className="bg-gray-100 py-16 !overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div data-aos="fade-up">
              <Image
                src={`/coffee-mid.png`}
                alt="banner"
                width={600}
                height={600}
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold" data-aos="fade-right">
                Order Coffee
              </h1>
              <p
                className="my-5 text-wrap"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                earum sed harum voluptate eaque nam fugit similique odit
                doloremque deleniti?
              </p>
              <Button
                className="rounded-3xl shadow-lg hover:scale-105 transition-all"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCoffee;
