import self from "../images/Professional.jpg";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <img src={self} className="about__image" alt="image of portfolio owner" />
      <div className="about__text">
        <h2>
          The swaggiest man to ever swagger. He once swagged so hard that he
          made 1000 women pregnant with swag alone. He is a swaggaholic.
        </h2>
      </div>
    </div>
  );
}
