import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cards, like }) {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesCardList__container">
        {cards.map((card) => (
          <MoviesCard card={card} like={like} />
        ))}
      </ul>
      <div className="MoviesCardList__more">
        <button className="MoviesCardList__more-text">Еще</button>
      </div>
    </section>
  );
}
