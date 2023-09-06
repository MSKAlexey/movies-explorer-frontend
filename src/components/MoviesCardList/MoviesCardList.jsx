import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cards }) {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container">
      <ul className="MoviesCardList__grid">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card}/>
        ))}
      </ul>
      </div>
    </section>
  );
}
