import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import SpecialProducts from "./components/SpecialProducts";
import AllProducts from "./components/AllProducts";

export default function Home() {
    return (
        <div className="z-20">
            <HeroSection/>
            <ShopByCategory/>
            <AboutSection/>
            <SpecialProducts/>
            <AllProducts/>
           
        </div>
    )
}

