import ContactUsForm from "./ContactUsForm";
import ContactusDetails from "./ContactusDetails";
import "./contact.pages.scss";
const Contact = () => {
  return (
    <div className="contact-us-main" id="contactUs">
      <ContactusDetails />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
