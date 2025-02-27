import "./Showcase.css";
import ItemCard from "./ItemCard";
import textBasedAdventure from "../images/textBasedAdventure.png";
import WTWR from "../images/WTWR.png";
import AroundTheUs from "../images/AroundTheUs.png";
import starWars from "../images/starWars.png";
import divergentPoint from "../images/divergentPoint.png";

export default function Showcase() {
  return (
    <div className="showcase">
      <h3 className="showcase__title">Showcase</h3>
      <div className="showcase__items">
        <ItemCard
          source={textBasedAdventure}
          title="Text Based Adventure"
          description="Journey through a text dungeon and try to find your way out!"
          link="https://github.com/G0LD3N-c0de/textBasedAdventure"
        />
        <ItemCard
          source={WTWR}
          title="What to Wear?"
          description="A weather app that tells you the weather for any location!"
          link="https://github.com/G0LD3N-c0de/se_project_express"
        />
        <ItemCard
          source={AroundTheUs}
          title="Around the US"
          description="A website that shows you around the US! Come take a look!"
          link="https://github.com/G0LD3N-c0de/se_project_aroundtheus"
        />
        <ItemCard
          source={starWars}
          title="Star Wars"
          description="Do or do not. There is no try. Come and test your knowledge, Padawan."
          link="https://github.com/G0LD3N-c0de/star-wars-encyclopedia"
        />
        <ItemCard
          source={divergentPoint}
          title="Divergent Point"
          description="Follow Hazel as he embarks toward Mars and uncovers its secrets."
          link="https://github.com/G0LD3N-c0de/divergentPoint"
        />
      </div>
    </div>
  );
}
