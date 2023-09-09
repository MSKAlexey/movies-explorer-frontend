import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({ cards, like }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="Movies">
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} like={like} />}
    </main>
  );
}
