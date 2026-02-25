import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import SpecialProducts from "./components/SpecialProducts";

export default function Home() {
    return (
        <div className="z-20">
            <HeroSection/>
            <ShopByCategory/>
            <AboutSection/>
            <SpecialProducts/>
        </div>
    )
}


{/* <div className="relative"> */}
{/* <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen"
        style={{ backgroundImage: `url(${home})` }}
      ></div> */}