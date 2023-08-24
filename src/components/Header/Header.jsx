import { Link, useLocation, Routes, Route } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";

export default function Header({ loggedIn, logOut, userData }) {
  const email = userData;
  const location = useLocation();
  const linkText = location.pathname === "/sign-in" ? "Регистрация" : "Войти";
  const logOutText = loggedIn ? "Выйти" : linkText;

  return (
    <header
      className={`Header Header_background-color_${
        location.pathname === "/" ? "landing" : "main"
        // location.pathname === '/' ? 'main' : 'landing'
      }`}
    >
      <Link href="/">
        <img className="Header__logo" src={logo} alt="Логотип" />
      </Link>

      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link className="Header__registet-link cursor" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link className="Header__registet-link cursor" to="/sign-up">
              Регистрация
            </Link>
          }
        />
      </Routes>

      {loggedIn && (
        <div className="Header__logOut">
          <p className="Header__user-email">{email}</p>
          <Link className="Header__registet-link cursor" onClick={logOut}>
            {logOutText}
          </Link>
        </div>
      )}
    </header>
  );
}
