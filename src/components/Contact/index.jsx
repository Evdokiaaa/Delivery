import ContactForm from "./ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div
        className="container contact__container "
        style={{ padding: "64px" }}
      >
        <h2 className="contact__title">Остались вопросы?</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
