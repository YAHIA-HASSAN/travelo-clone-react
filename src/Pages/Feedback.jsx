import FeedbackForm from "../Components/FeedbackForm/FeedbackForm";
import PhotoSection from "../Components/PhotoSection/PhotoSection";

import Photo from "../assets/about.jpg";

const Feedback = ()=>{
    return (
        <>
            <PhotoSection     
            title="Feedback"
        imageUrl={Photo}/>
         
            <FeedbackForm/>
        </>
    )
}

export default Feedback;