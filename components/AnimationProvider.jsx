"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const AnimationProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  });
  return <>{children}</>;
};

export default AnimationProvider;
