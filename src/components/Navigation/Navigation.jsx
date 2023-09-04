import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation({ loggedIn, isOpenMenu, onClickMenu }) {
  return (
    <>
      {loggedIn ? (
        <nav className="Navigation__container">
          <div
            className={`Navigation__list Navigation__list_logged Navigation__list_state_${
              isOpenMenu ? "open" : "close"
            }`}
          >
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

          </div>
          
          <button
            type="button"
            className={`${
              isOpenMenu
                ? "Navigation__menu Navigation__menu_close"
                : "Navigation__menu"
            }`}
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
