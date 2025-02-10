import self from "../images/Professional.jpg";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <img src={self} className="about__image" alt="image of portfolio owner" />
      <div className="about__text">
        <h3 className="about__text-title">About Me</h3>
        <div className="about__text-paragraph">
          Hey there! My name is Nicoli Kazemi, and I am a software developer.
          Specialized in and passionate about web development and UI/UX design.
          As an alumni of TripleTen Software School, I learned both the
          front-end and back-end side of the development process. Always
          interested in opportunites where I can improve my web development
          skills.
          <br></br>
          <br></br>I am also an author with my first self-published book,
          "Divergent Point" set to be published soon. Don't get too excited. It
          will definately have that first book energy :D
          <br></br>
          <br></br>
          Colorado resident and graduate of University of Colorado, Colorado
          Springs. In my freetime, I like to read and play video games or go out
          and explore Colorado's vast natural beauty.
          <br></br>
          <br></br>
          Feel free to connect with me!
        </div>
      </div>
    </div>
  );
}
