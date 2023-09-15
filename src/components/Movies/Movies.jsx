import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

export default function Movies({ firstSubmit, setFirstSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [fCards, setFCards] = useState(
    JSON.parse(localStorage.getItem("fCards")) || []
  );
  const [request, setRequest] = useState(localStorage.getItem("request") || "");

  const [shorts, setShorts] = useState(
    localStorage.getItem("shorts") === "true"
  );
  const [requestError, setRequestError] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [savedMovies, setSavedMoives] = useState([""]);
  const [cardsUpdate, setCardsUpdate] = useState(0);

  const filterCards = () => {
    return cards.filter((element) => {
      if (!shorts && element.duration < 40) return false;
      else if (
        element.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        element.nameEN.toLowerCase().includes(request.toLowerCase())
      )
        return true;
      else return false;
    });
  };

  const onSubmitForm = () => {
    if (firstSubmit) {
      setIsInitial(false);
      setIsLoading(true);
      setFirstSubmit(false);
      moviesApi
        .getMovies()
        .then((card) => {
          setCards(card);
          localStorage.setItem("cards", JSON.stringify(card));
          localStorage.setItem("request", request);
          localStorage.setItem("shorts", shorts);
          setFCards(filterCards());
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          setRequestError(true);
        });
    } else {
      localStorage.setItem("request", request);
      localStorage.setItem("shorts", shorts);
      setFCards(filterCards());
    }
  };

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        setIsLoading(false);
        setSavedMoives(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fCards]);

  useEffect(() => {
    localStorage.setItem("fCards", JSON.stringify(fCards));
    setFCards(filterCards());
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("shorts", shorts);
    setFCards(filterCards());
  }, [shorts]);

  // console.log(savedMovies)

  return (
    <main className="Movies">
      <SearchForm
        search={request}
        setRequest={setRequest}
        onSubmit={onSubmitForm}
        shorts={shorts}
        setShorts={setShorts}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={fCards}
          isInitial={isInitial}
          requestError={requestError}
          savedMovies={savedMovies}
          cardsUpdate={cardsUpdate}
          setCardsUpdate={setCardsUpdate}
        />
      )}
    </main>
  );
}
