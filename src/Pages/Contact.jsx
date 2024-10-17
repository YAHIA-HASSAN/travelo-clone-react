import PhotoSection from "../Components/PhotoSection/PhotoSection";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import "../Components/Contact/Contact.css";
import Photo from "../assets/contact.jpg"
const Contact = () => {
    return (
        <div>
            <PhotoSection 
            title="contact"
            imageUrl={Photo}/>
            <div id="contact-page-body">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact;
