import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import InstantCoffee from "@/components/InstantCoffee";
import OrderCoffee from "@/components/OrderCoffee";
import SellingCoffee from "@/components/SellingCoffee";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      {/* // <div className="flex items-center justify-between min-h-screen p-1 flex-col"> */}
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <SellingCoffee />
      <InstantCoffee />
      <Testimonial />
      {/* // </div> */}
    </>
  );
}
