import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation({ loggedIn, isOpenMenu, onClickMenu }) {
  return (
    <>
      {loggedIn ? (
        <nav
          className={`Navigation__container Navigation_state_${
            isOpenMenu ? "open" : "close"
          }`}
        >
          <ul
            className={`Navigation__list Navigation__list_logged Navigation__list_state_${
              isOpenMenu ? "open" : "close"
            }`}
          >
            {isOpenMenu && (
              <li className="Navigation__item">
                <NavLink
                  className={({ isActive }) =>
                    !isActive
                      ? "Navigation__link Navigation__link_active"
                      : "Navigation__link"
                  }
                  to="/"
                >
                  Главная
                </NavLink>
              </li>
            )}
            <li className="Navigation__item">
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
            </li>
            <li className="Navigation__unit">
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
            </li>
            <li className="Navigation__unit">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "Navigation__link link Navigation__link_type_account Navigation__link_active"
                    : "Navigation__link link Navigation__link_type_account"
                }
                to="/profile"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className={`${
              isOpenMenu
                ? "Navigation__accordion-button Navigation__accordion-button_close"
                : "Navigation__accordion-button"
            }`}
            onClick={onClickMenu}
          ></button>
        </nav>
      ) : (
        <nav className="Navigation__container">
          <ul className="Navigation__table">
            <li className="Navigation__column">
              <Link className="Navigation__link Navigation__link_sign-up" to="/sign-up">
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
