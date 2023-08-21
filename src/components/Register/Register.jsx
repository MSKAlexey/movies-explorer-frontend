import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

export default function Register({ handelRegisterSubmit /* errorMessage */ }) {
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

  function handelSubmit(e) {
    e.preventDefault();
    handelRegisterSubmit({ email, password });
  }

  return (
    <form className="Register" onSubmit={handelSubmit}>
      <div className="Register__container">
        <img className="Register__logo" src={logo} alt="Логотип" />
        <h1 className="Register__title">{"Регистрация"}</h1>

        <input
          className="Register__input"
          placeholder="email@mail.com"
          type="email"
          name="email"
          minLength="5"
          maxLength="15"
          required
          onChange={handleChange}
        />
        <span id="input-name-error" className="error">
          {/* errorMessage */}
        </span>

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
        <span id="input-name-error" className="error">
          {/* errorMessage */}
        </span>

        <button
          type="submit"
          name="button"
          className="LoginAndRegistrationWithForm__button cursor"
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
  );
}
