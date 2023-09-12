import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export default function Register({ handelRegisterSubmit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handelSubmit(e) {
    e.preventDefault();
    handelRegisterSubmit(values);
  }

  return (
    <section className="Register">
      <div className="Register__container">
        <Link className="Register__logo-link" to="/">
          <img className="Register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="Register__title">{"Добро пожаловать!"}</h1>

        <form className="Register__form" onSubmit={handelSubmit}>
          <div className="Register__form-container">
            <div className="Register__form-input">
              <span className="Register__title-input">Имя</span>
              <input
                className="Register__input"
                value={values.name ?? ""}
                placeholder="Ваше имя"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {errors.name ?? ""}
              </span>
            </div>

            <div className="Register__form-input">
              <span className="Register__title-input">E-mail</span>
              <input
                className="Register__input"
                placeholder="pochta@yandex.ru|"
                value={values.email ?? ""}
                type="email"
                name="email"
                minLength="5"
                maxLength="15"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {errors.email ?? ""}
              </span>
            </div>
            <div className="Register__form-input">
              <span className="Register__title-input">Пароль</span>
              <input
                className="Register__input"
                placeholder="••••••••••"
                value={values.password || ""}
                type="password"
                name="password"
                minLength="6"
                maxLength="15"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {errors.password ?? ""}
              </span>
            </div>
          </div>
          <div className="Register__button-containet">
            <button
              type="submit"
              name="button"
              className="Register__button cursor"
              disabled={!isValid}
            >
              {"Зарегистрироваться"}
            </button>

            <p className="Register__text">
              Уже зарегистрированы?{" "}
              <Link className="Register__link" to="/sign-in">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
