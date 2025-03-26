import "./Header.css";
import { Link } from "react-router-dom";
import hamburgerLogo from "../images/Hamburger_icon.svg.png";
export default function Header({ onClick, hamburgerState, setHamburgerState }) {
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
        <img
          src={hamburgerLogo}
          alt="hamburger menu"
          className="header__hamburger"
          onClick={setHamburgerState}
        />
        <div className={hamburgerState}>
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
