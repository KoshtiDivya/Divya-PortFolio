import React, { useRef, useState } from "react";
import github from '../images/github.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkdin from '../images/linkdin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
       e.preventDefault();
       setLoading(true);
    emailjs
      .sendForm('service_r6d0co2', 'template_o8p1nat', form.current, 'tbsl8ZVurYGz9TTV_',
      )
      .then(
        () => {
          e.target.reset();
          setSend(true);
          setLoading(false);
          // alert("Email successfully send..");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
   };

  return (
    <section className="contact">
      <h1 className="heading">Contact Me</h1>
      <p className="desc">Please fill out the form below to discuss any work opportunities.</p>
      <div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="your_name" className="name" placeholder="Enter Your Name" required/>
          <input type="email" name="your_email" className="email" placeholder="Enter Your Email" required/>
          <textarea name="message" rows="5" placeholder="Write Your Message" className="message" required></textarea>
          <button type="submit" value="Send" className="submitBtn">
            {
              loading ? "Sending Message.."
                : "Send Message"
            }
          </button>
          {
            send && <span className="msg-send">Message send successfully...</span>
          }
          <div className="links" data-aos="zoom-in">
            <a href="https://github.com/KoshtiDivya"><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/divya-koshti"><img src={linkdin} alt="linkdin" /></a>  
             <a href="https://www.facebook.com/share/15g9kdHsy2/"><img src={facebook} alt="facebook" /></a> 
            <a href="https://www.instagram.com/divya.koshti.982/#"><img src={instagram} alt="instagram" /></a> 
    
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
