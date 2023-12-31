import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navigation({ loggedIn, onClickMenu }) {
  const location = useLocation();
  return (
    <>
      {loggedIn ? (
        <nav className="Navigation">
          <div className="Navigation__list">
            <div className="Navigation__movie-container">
              <div className="Navigation__unit">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "Navigation__link Navigation__link_active"
                      : "Navigation__link"
                  }
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </div>

              <div className="Navigation__unit">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "Navigation__link Navigation__link_active"
                      : "Navigation__link"
                  }
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </NavLink>
              </div>
            </div>

            <div className="Navigation__account-unit">
              <div className="Navigation__link-text">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "Navigation__link Navigation__link_type_account Navigation__link_active"
                      : "Navigation__link Navigation__link_type_account"
                  }
                  to="/profile"
                >
                  Аккаунт
                </NavLink>
              </div>
              <div
                className={`Navigation__image Navigation__image_background-color_${
                  location.pathname === "/" ? "landing" : "main"
                }`}
              ></div>
            </div>
          </div>

          <button
            type="button"
            className="Navigation__menu"
            onClick={onClickMenu}
          ></button>
        </nav>
      ) : (
        <nav className="Navigation__menu-container">
          <ul className="Navigation__table">
            <li className="Navigation__column">
              <Link
                className="Navigation__link Navigation__link_sign-up"
                to="/sign-up"
              >
                Регистрация
              </Link>
            </li>
            <li className="Navigation__column">
              <Link
                className="Navigation__link Navigation__link_sign-in"
                to="/sign-in"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
