import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

export default function Register({ handelRegisterSubmit }) {

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handelSubmit(e) {
    e.preventDefault();
    handelRegisterSubmit({ name, email, password });
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
                placeholder="Ваше имя"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {/* {errors} */}
              </span>
            </div>

            <div className="Register__form-input">
              <span className="Register__title-input">E-mail</span>
              <input
                className="Register__input"
                placeholder="pochta@yandex.ru|"
                type="email"
                name="email"
                minLength="5"
                maxLength="15"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {/* {errorMessage} */}
              </span>
            </div>
            <div className="Register__form-input">
              <span className="Register__title-input">Пароль</span>
              <input
                className="Register__input"
                placeholder="••••••••••"
                type="password"
                name="password"
                minLength="6"
                maxLength="15"
                required
                onChange={handleChange}
              />
              <span id="input-name-error" className="Register__error">
                {/* errorMessage */}
              </span>
            </div>
          </div>
          <div className="Register__button-containet">
            <button
              type="submit"
              name="button"
              className="Register__button cursor"
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
