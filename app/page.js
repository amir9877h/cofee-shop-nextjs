import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* // <div className="flex items-center justify-between min-h-screen p-1 flex-col"> */}
      <Header />
      <Banner />
      <Explore />
      {/* // </div> */}
    </>
  );
}
