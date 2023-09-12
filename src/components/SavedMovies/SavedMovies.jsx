import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

export default function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMoives] = useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [request, setRequest] = useState("");
  const [shorts, setShorts] = useState(true);
  const [cardsUpdate, setCardsUpdate] = useState(0);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setLoading(true);
    mainApi
      .getSavedMovies(localStorage.getItem("jwt"))
      .then((data) => {
        setLoading(false);

        const userData = data.filter((movie) => {
          return movie.owner === currentUser._id;
        });

        setSavedMoives(userData);
        setSavedFilteredMovies(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cardsUpdate, currentUser._id]);

  const onSubmitForm = () => {
    setIsInitial(false);

    const filteredCards = savedMovies.filter((element) => {
      if (!shorts && element.duration < 40) return false;
      else if (element.owner !== currentUser._id) {
        return false;
      } else if (
        element.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        element.nameEN.toLowerCase().includes(request.toLowerCase())
      )
        return true;
      else return false;
    });

    setSavedFilteredMovies(filteredCards);
  };

  useEffect(() => {
    const filteredCards = savedMovies.filter((movie) => {
      if (!shorts && movie.duration < 40) return false;
      else if (movie.owner !== currentUser._id) {
        return false;
      } else if (
        movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())
      )
        return true;
      else return false;
    });

    setSavedFilteredMovies(filteredCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shorts]);

  return (
    <main className="SavedMovies">
      <SearchForm
        request={request}
        setRequest={setRequest}
        onSubmit={onSubmitForm}
        shorts={shorts}
        setShorts={setShorts}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isInitial={isInitial}
          cards={savedFilteredMovies}
          fromSavedPage={true}
          savedMovies={savedMovies}
          cardsUpdate={cardsUpdate}
          setCardsUpdate={setCardsUpdate}
        />
      )}
    </main>
  );
}
