import React, { useRef } from "react";
import github from '../images/github.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkdin from '../images/linkdin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
       e.preventDefault();

    emailjs
      .sendForm('service_t4c2mbc', 'template_o8p1nat', form.current, 't8zOgaxEN_TlICVWJ',
      )
      .then(
        () => {
          e.target.reset();
          alert("Email successfully send..");
          console.log("successful");
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
          <input type="text" name="your_name" className="name" placeholder="Enter Your Name" />
          <input type="email" name="your_email" className="email" placeholder="Enter Your Email" />
          <textarea name="message" rows="5" placeholder="Write Your Message" className="message"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>
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
