import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Alakazemi Creations</h1>
        <div className="header__links">
          <p className="header__link">About</p>
          <p className="header__link">Writings</p>
          <p className="header__link">Games</p>
        </div>
      </div>
    </header>
  );
}
