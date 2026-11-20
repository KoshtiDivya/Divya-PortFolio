import { useRef, useState } from "react";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkdin from "../images/linkdin.png";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSendError("");

    try {
      await emailjs.sendForm(
        "service_r6d0co2",
        "template_o8p1nat",
        form.current,
        "tbsl8ZVurYGz9TTV_"
      );
      form.current.reset();
      setSend(true);
      setTimeout(() => setSend(false), 5000);
    } catch (error) {
      console.error("Failed to send contact message", error);
      setSendError(
        "We couldn't send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="heading-container" data-aos="fade-up">
        <h2 id="contact-heading" className="heading">Get In Touch</h2>
        <p className="subheading">
          Looking for a skilled React Developer or Frontend Developer in Ahmedabad? Feel free to reach out for work opportunities, collaboration, or inquiries!
        </p>
      </div>

      <div className="contact-card" data-aos="fade-up" data-aos-duration="800">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              name="your_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Your Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="your_email"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write Your Message Here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary justify-center w-full py-4 text-base"
            disabled={loading}
          >
            <FaPaperPlane className="text-sm" aria-hidden="true" />
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          {send && (
            <p className="msg-success" role="status">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}
          {sendError && (
            <p className="msg-error" role="alert">
              {sendError}
            </p>
          )}

          <div className="social-links" aria-label="Social media profiles">
            <a
              href="https://github.com/KoshtiDivya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Divya Koshti on GitHub"
              aria-label="Divya Koshti on GitHub"
            >
              <img
                src={github}
                alt="Divya Koshti on GitHub"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/divya-koshti"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Divya Koshti on LinkedIn"
              aria-label="Divya Koshti on LinkedIn"
            >
              <img
                src={linkdin}
                alt="Divya Koshti on LinkedIn"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://www.facebook.com/share/15g9kdHsy2/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Divya Koshti on Facebook"
              aria-label="Divya Koshti on Facebook"
            >
              <img
                src={facebook}
                alt="Divya Koshti on Facebook"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://www.instagram.com/divya.koshti.982/#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Divya Koshti on Instagram"
              aria-label="Divya Koshti on Instagram"
            >
              <img
                src={instagram}
                alt="Divya Koshti on Instagram"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
