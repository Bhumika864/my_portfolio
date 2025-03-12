import React, { useRef } from "react";
import * as emailjs from "@emailjs/browser";
import "./contact.css"
const ContactUs = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ptg43ei", "template_114qsd9", form.current, {
        publicKey: "ORmQChO3AH1ehV9Fp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact">
      <div className="contact_title">Take a <span className="coffee">Coffee</span> & <span>Chat</span> with me</div>
      <form ref={form} onSubmit={sendEmail}className="form" >
        <label>Name</label>
        <input placeholder="Enter your name"  type="text" name="from_name" />
        <label>Email</label>
        <input  placeholder="Enter your email address" type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" placeholder="Enter the message" ></textarea>
        <input type="submit" value="Send" className="submit_btn" />
      </form>
      </div>
    </>
  );
};
export default ContactUs;
