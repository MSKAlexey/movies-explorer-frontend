import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

export default function Login({ handelLoginSubmit /* errorMessage */ }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handelLoginSubmit({ email, password });
  }

  return (
    <section className="Login">
      <div className="Login__container">
        <Link className="Login__logo-link" to="/">
          <img className="Login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="Login__title">{"Рады видеть!"}</h1>

        <form className="Login__form " onSubmit={handleSubmit}>
          <div className="Login__form-container">
            <div className="Login__form-input">
              <span className="Login__title-input">E-mail</span>
              <input
                className="Login__input"
                placeholder="pochta@yandex.ru|"
                type="email"
                name="email"
                minLength="5"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="error">
                {/* errorMessage */}
              </span>
            </div>
            <div className="Login__form-input">
              <span className="Login__title-input">Пароль</span>
              <input
                className="Login__input"
                placeholder="••••••••••"
                type="password"
                name="password"
                minLength="6"
                maxLength="15"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="error">
                {/* errorMessage */}
              </span>
            </div>
          </div>
          <div className="Login__button-container">
            <button
              type="submit"
              name="button"
              className="Login__button cursor"
            >
              {"Войти"}
            </button>
            {
              <p className="Login__text">
                Ещё не зарегистрированы?{" "}
                <Link className="Login__link" to="/sign-up">
                  Регистрация
                </Link>
              </p>
            }
          </div>
        </form>
      </div>
    </section>
  );
}
