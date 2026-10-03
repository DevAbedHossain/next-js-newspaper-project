import HeroSection from "./components/homePage/HeroSection";
import OthersSection from "./components/homePage/OthersSection";
import SidbarItems from "./components/homePage/SidbarItems";


export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {/* Left Item */}
      <div className="col-span-2">
        <HeroSection />
        <OthersSection />
      </div>

      {/* Right Iitem */}
      <div className="col-span-1">
        <SidbarItems />
      </div>


    </div>
  );
}
