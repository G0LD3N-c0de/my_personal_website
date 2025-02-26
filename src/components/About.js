import self from "../images/Professional.jpg";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <img src={self} className="about__image" alt="image of portfolio owner" />
      <div className="about__text">
        <h3 className="about__text-title">Nicoli Kazemi</h3>
        <p className="about__text-description">
          Web Developer, Author, Educator, Big Booty Latina Lover, World
          Traveler
        </p>
      </div>
    </div>
  );
}
