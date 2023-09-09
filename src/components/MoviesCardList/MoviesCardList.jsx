import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cards, like }) {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesCard">
        {cards.map((card) => (
          <MoviesCard key={card._id} card={card} />
        ))}
      </ul>
      <div className="MoviesCardList__more">
        <button className="MoviesCardList__more-text">Еще</button>
      </div>
    </section>
  );
}
