import PhotoSection from "../Components/PhotoSection/PhotoSection";
import VideoSection from "../Components/VidioSection/VideoSection";
import TravelSection from "../Components/TravelSection/TravelSection";
import Photo from "../assets/771334db9c784de6321db707cc00504b.jpg";
import Search from "../Components/Search/Search";
import Subscribe from "../Components/Subscribe/SubscribeSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Home = () => {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  

    return (
        <div>
            <PhotoSection  
            title="Welcome" 
            imageUrl={Photo}/>
            <Search/>
            <Subscribe/>
            <VideoSection />
            <TravelSection />
            
        </div>
    );
};

export default Home;