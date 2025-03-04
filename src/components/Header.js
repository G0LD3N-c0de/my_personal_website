import "./Header.css";
import { Link } from "react-router-dom";
export default function Header({ onClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Alakazemi Creations</h1>
        <div className="header__links">
          <Link to="/" className="header__link">
            Home
          </Link>
          <Link to="/about" className="header__link">
            About
          </Link>
          <p className="header__link" onClick={onClick}>
            Contact
          </p>
        </div>
      </div>
    </header>
  );
}
