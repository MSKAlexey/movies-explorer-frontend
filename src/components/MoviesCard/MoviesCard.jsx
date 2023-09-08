import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ card, like }) {
  const location = useLocation();

  const cardLikeButtonClassName = `MoviesCard__icon cursor ${
    like && "MoviesCard__icon_active"
  }`;

  function convert(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }

  return (
    <li className="MoviesCard__item">
      <img
        src={`https://api.nomoreparties.co/${card.image.url}`}
        alt={card.nameRU}
        className="MoviesCard__image cursor"
      />
      <div className="MoviesCard__title">
        <h2 className="MoviesCard__title-text">{card.nameRU}</h2>
        <div className="MoviesCard__like">
          <button
            type="button"
            // className={cardLikeButtonClassName}
            className={`${
              location.pathname === "/movies"
                ? cardLikeButtonClassName
                : "MoviesCard__icon-close"
            }`}

            // onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <div className="MoviesCard__time">{convert(card.duration)}</div>
    </li>
  );
}
