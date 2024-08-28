import ContactForm from "./ContactForm";
import './Contact.css';  // Ensure this CSS file has the required styles
import Hero2 from '../Hero2/Hero2';
import teamphoto from '../../pictures/monument.jpg'
export default function Contact() {
    return (
        <div className="contact-page-container">
                    <Hero2
            backgroundImage={teamphoto}
            text="Contact Us"
            height="40vh"  // Set appropriate height as needed
            subText=""  // Optional: add a subtitle if needed
        />
            <div className="contact-banner">
            </div>
            <div className="contact-form-section">
                <ContactForm />
            </div>
        </div>
    );
}