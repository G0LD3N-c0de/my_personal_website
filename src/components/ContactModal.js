import "./ContactModal.css";
export default function ContactModal({ onClose }) {
  return (
    <div className="contact-modal">
      <div className="contact-modal__content">
        <h3 className="contact-modal__title">Contact</h3>
        <button className="contact-modal__close" onClick={onClose} />
        <div className="contact-modal__form">
          <label className="contact-modal__label">Name</label>
          <input className="contact-modal__input" required></input>
          <label className="contact-modal__label">Email</label>
          <input className="contact-modal__input" required></input>
          <label className="contact-modal__label">Message</label>
          <textarea className="contact-modal__input" required></textarea>
          <button className="contact-modal__submit">Submit</button>
        </div>
      </div>
    </div>
  );
}
