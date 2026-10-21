import React, { useRef, useState } from "react";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkdin from "../images/linkdin.png";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_r6d0co2",
        "template_o8p1nat",
        form.current,
        "tbsl8ZVurYGz9TTV_"
      )
      .then(
        () => {
          e.target.reset();
          setSend(true);
          setLoading(false);
          setTimeout(() => setSend(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="heading-container" data-aos="fade-up">
        <h2 className="heading">Get In Touch</h2>
        <p className="subheading">
          Have a project in mind or want to explore work opportunities? Feel free to reach out!
        </p>
      </div>

      <div className="contact-card" data-aos="fade-up" data-aos-duration="800">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="your_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="your_email"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="form-group">
            <textarea
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
            <FaPaperPlane className="text-sm" />
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          {send && (
            <p className="msg-success">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}

          <div className="social-links">
            <a
              href="https://github.com/KoshtiDivya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/divya-koshti"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <img src={linkdin} alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/share/15g9kdHsy2/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Facebook"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/divya.koshti.982/#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Instagram"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
