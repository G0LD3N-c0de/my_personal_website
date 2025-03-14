import "./DetailedAbout.css";
import beach from "../images/beach-nico.jpg";
export default function DetailedAbout() {
  return (
    <div className="detailed-about">
      <img className="detailed-about__image" alt="image of nico" src={beach} />
      <p className="detailed-about__text">
        Hey there! I'm Nicoli Kazemi, a web developer and educator with a
        passion for creating digital experiences that make an impact. After
        completing my studies at TripleTen's web development program, I've come
        full circle and now teach the next generation of developers at the same
        institution.
        <br></br>
        <br></br>
        When I'm not immersed in lines of code, I'm usually lost in lines of
        text. Writing is my creative outlet, and I'm thrilled to share that my
        book, "Divergent Point," will be published soon. It's been a labor of
        love that I can't wait to share with the world, so keep an eye out for
        it!
        <br></br>
        <br></br>
        Travel is what keeps my perspective fresh and my inspiration flowing.
        You might find me catching waves in Costa Rica or road-tripping across
        the United States from the enchanting landscapes of New Mexico to the
        vibrant streets of New Orleans. Next, I'm dreaming of exploring more of
        Latin America and venturing into Asia's diverse cultures and landscapes.
      </p>
    </div>
  );
}
