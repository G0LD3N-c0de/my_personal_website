import "./ItemCard.css";

export default function ItemCard({ source, title, description, link }) {
  return (
    <div className="item-card">
      <img className="item-card__image" src={source} alt={title} />
      <div className="item-card__content">
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__description">{description}</p>
        <a className="item-card__link" href={link} target="_blank">
          Learn More
        </a>
      </div>
    </div>
  );
}
