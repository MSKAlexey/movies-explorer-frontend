import "./MoviesCard.css";

export default function MoviesCard({ card, like }) {
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
        alt=""
        className="MoviesCard__image cursor"
      />
      <div className="MoviesCard__title-icon">
        <h2 className="MoviesCard__title">{card.nameRU}</h2>
        <div className="MoviesCard_like-count">
          <button
            type="button"
            className={cardLikeButtonClassName}

            // onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <div className="MoviesCard__time">{convert(card.duration)}</div>
    </li>
  );
}
