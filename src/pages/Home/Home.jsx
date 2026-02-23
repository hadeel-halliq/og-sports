import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";

export default function Home() {
    return (
        <div className="z-20">
            <HeroSection/>
            <ShopByCategory/>
        </div>
    )
}



{/* <div className="relative"> */}
{/* <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen"
        style={{ backgroundImage: `url(${home})` }}
      ></div> */}