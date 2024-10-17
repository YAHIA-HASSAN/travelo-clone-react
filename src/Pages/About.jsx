import PhotoSection from "../Components/PhotoSection/PhotoSection";
import OurStory from "../Components/OurStory/OurStory";
import VideoSection from "../Components/VidioSection/VideoSection";
import TravelSection from "../Components/TravelSection/TravelSection";
import Photo from "../assets/about.jpg";


const About = () => {
    return (
        <div>
            <PhotoSection  
            title="About Us"
            imageUrl={Photo}/>
            <OurStory />
            <VideoSection />
            <TravelSection />
        </div>
    );
};

export default About;
