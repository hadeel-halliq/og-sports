import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import StartYourJourney from "./components/StartYourJourney";
import Statistics from "./components/Statistics";
import TeamAndAcademies from "./components/TeamAndAcademies";
import WhyChooseUs from "./components/WhyChooseUs";

export default function AboutUs() {
    return (
        <div className="z-20">
            <HeroSection/>
            <OurStory/>
            <Statistics/>
            <WhyChooseUs/>
            <TeamAndAcademies/>
            <StartYourJourney/>
        </div>
    )
}