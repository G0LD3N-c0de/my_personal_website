import "./ContactModal.css";
import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
export default function ContactModal({ onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "D8GZnizMGkWcTbiAC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    onClose();
  };

  return (
    <div className="contact-modal">
      <div className="contact-modal__content">
        <h3 className="contact-modal__title">Contact</h3>
        <button className="contact-modal__close" onClick={onClose} />
        <form className="contact-modal__form" ref={form} onSubmit={sendEmail}>
          <label className="contact-modal__label">Name</label>
          <input
            className="contact-modal__input"
            required
            type="text"
            name="user_name"
          ></input>
          <label className="contact-modal__label">Email</label>
          <input
            className="contact-modal__input"
            required
            type="email"
            name="user_email"
          ></input>
          <label className="contact-modal__label">Message</label>
          <textarea
            className="contact-modal__input"
            required
            name="message"
          ></textarea>
          <button className="contact-modal__submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
