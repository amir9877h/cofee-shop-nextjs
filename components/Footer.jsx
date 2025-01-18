import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12">
            <h3
              className="font-bold text-3xl text-indigo-600 mb-4"
              data-aos="fade-right"
            >
              Coffee Shop
            </h3>

            <div className="flex text-gray-500 uppercase text-sm">
              <a
                href="#"
                className="mr-2 hover:text-indigo-600"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Home
              </a>
              <a
                href="#"
                className="mr-2 hover:text-indigo-600"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                About Us
              </a>
              <a
                href="#"
                className="mr-2 hover:text-indigo-600"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="mr-2 hover:text-indigo-600"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                Support Us
              </a>
            </div>
          </div>
          <div className="p-5 sm:w-4/12">
            <h3
              className="font-medium text-lg text-indigo-600 mb-4"
              data-aos="fade-up"
            >
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4" data-aos="fade-up" data-aos-delay="200">
              <input
                className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
