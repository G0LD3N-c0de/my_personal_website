import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__author">Developed by Nicoli Kazemi</div>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/nicoli-kazemi/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/G0LD3N-c0de"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
