import "./MoviesCard.css";
import React from "react";
import mainApi, { saveMovie, deleteMovie } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  fromSavedPage,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId,
  savedMovies,
  cardsUpdate,
  setCardsUpdate,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(savedMovies);

  const [isSavedState, setIsSavedState] = React.useState(
    savedMovies.some((movie) => {
      return movie.movieId === movieId && movie.owner === currentUser._id;
    })
  );

  const [currentMovieId, setCurrentMovieId] = React.useState(
    savedMovies.find((movie) => {
      return movie.movieId === movieId && movie.owner === currentUser._id;
    }) || ""
  );

  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours > 0 ? `${hours} ч` : "";
  const minutesString = minutes > 0 ? `${minutes} мин` : "";

  const hadleRemoveBtn = () => {
    // debugger
    mainApi
      .deleteMovie(currentMovieId)
      .then(() => {
        setIsSavedState(false);
        setCurrentMovieId("");
        // if (cardsUpdate) {
        setCardsUpdate(cardsUpdate + 1);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSaveBtn = () => {
    if (isSavedState) {
      hadleRemoveBtn();
    } else {
      mainApi
        .saveMovie({
          country: country,
          director: director,
          duration: duration,
          year: year,
          description: description,
          image: image,
          trailerLink: trailerLink,
          nameRU: nameRU,
          nameEN: nameEN,
          thumbnail: thumbnail,
          movieId: movieId,
        })
        .then((movie) => {
          setIsSavedState(true);
          setCurrentMovieId(movie._id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  React.useEffect(() => {
    // debugger
    const isSaved = savedMovies.some((movie) => {
      return movie.movieId === movieId && movie.owner === currentUser._id;
    });

    const currentMovie =
      savedMovies.find((movie) => {
        return movie.movieId === movieId && movie.owner === currentUser._id;
      }) || "";

    setIsSavedState(isSaved);
    setCurrentMovieId(currentMovie._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  const cardLikeButtonClassName = `MoviesCard__icon cursor ${
    isSavedState && "MoviesCard__icon_active"
  }`;

  return (
    <li className="MoviesCard__item">
      <img src={image} alt={nameRU} className="MoviesCard__image cursor" />
      <div className="MoviesCard__title">
        <h2 className="MoviesCard__title-text">{nameRU}</h2>
        <div className="MoviesCard__like">
          <button
            type="button"
            className={`${
              // eslint-disable-next-line no-restricted-globals
              location.pathname === "/movies"
                ? cardLikeButtonClassName
                : "MoviesCard__icon-close"
            }`}
            onClick={handleSaveBtn}
          ></button>
        </div>
      </div>
      <div className="MoviesCard__time">{}</div>
    </li>
  );
}

export default MoviesCard;
