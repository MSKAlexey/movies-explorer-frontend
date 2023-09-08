import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesBD from "../MainApi.json";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({ like }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="Movies">
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={moviesBD} like={like} />
      )}
    </main>
  );
}
