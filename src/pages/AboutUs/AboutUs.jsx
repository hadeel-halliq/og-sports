import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import Statistics from "./components/Statistics";

export default function AboutUs() {
    return (
        <div className="z-20">
            <HeroSection/>
            <OurStory/>
            <Statistics/>
        </div>
    )
}