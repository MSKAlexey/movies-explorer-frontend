import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesBD from "../MainApi.json";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

export default function SavedMovies({ like }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="SavedMovies">
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={moviesBD} like={like} />
      )}
    </main>
  );
}
