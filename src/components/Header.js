import "./Header.css";
export default function Header({ onClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Alakazemi Creations</h1>
        <div className="header__links">
          <p className="header__link">Home</p>
          <p className="header__link" onClick={onClick}>
            Contact
          </p>
        </div>
      </div>
    </header>
  );
}
