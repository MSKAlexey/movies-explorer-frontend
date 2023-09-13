import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import { Link, useLocation } from "react-router-dom";

export default function MoviesCard({
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
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const [isSavedState, setIsSavedState] = useState(
    savedMovies.some((movie) => {
      return movie.movieId === movieId && movie.owner === currentUser._id;
    })
  );

  const [currentMovieId, setCurrentMovieId] = useState(
    savedMovies.find((movie) => {
      return movie.movieId === movieId && movie.owner === currentUser._id;
    }) || ""
  );

  const hadleRemoveBtn = () => {
    mainApi
      .deleteMovie(currentMovieId)
      .then(() => {
        setIsSavedState(false);
        setCurrentMovieId("");
        setCardsUpdate(cardsUpdate + 1);
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

  useEffect(() => {
    const isSaved = savedMovies.some((movie) => {
      // debugger;
      return movie.movieId === movieId && movie.owner === currentUser._id;
    });

    // console.log(isSaved);

    const currentMovie =
      savedMovies.find((movie) => {
        return movie.movieId === movieId && movie.owner === currentUser._id;
      }) || "";

    setIsSavedState(isSaved);
    setCurrentMovieId(currentMovie._id);
  }, [savedMovies]);

  function convert(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }

  const cardLikeButtonClassName = `MoviesCard__icon cursor ${
    isSavedState && "MoviesCard__icon_active"
  }`;

  return (
    <li className="MoviesCard__item">
      <Link to={trailerLink} target="_blank">
        <img src={image} alt={nameRU} className="MoviesCard__image cursor" />
      </Link>
      <div className="MoviesCard__title">
        <h2 className="MoviesCard__title-text">{nameRU}</h2>
        <div className="MoviesCard__like">
          <button
            type="button"
            className={`${
              location.pathname === "/movies"
                ? cardLikeButtonClassName
                : "MoviesCard__icon-close cursor"
            }`}
            onClick={handleSaveBtn}
          ></button>
        </div>
      </div>
      <div className="MoviesCard__time">{convert(duration)}</div>
    </li>
  );
}
