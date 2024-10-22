import DestinationDetails from "../Components/Destination Details/DestinationDetails";
import PhotoSection from "../Components/PhotoSection/PhotoSection";

import Photo from "../assets/contact.jpg";
const Destination = ()=>{
    return (
        <div>
            <PhotoSection 
            title="Destination"
            imageUrl={Photo}/>
            <DestinationDetails />
        </div>
    )
}

export default Destination;