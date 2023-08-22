import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

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
    <form className="LoginAndRegistrationWithForm" onSubmit={handleSubmit}>
      <div className="LoginAndRegistrationWithForm__container">
        <h1 className="LoginAndRegistrationWithForm__title">{"Вход"}</h1>

        <input
          className="Login__input"
          placeholder="email@mail.com"
          type="email"
          name="email"
          minLength="5"
          required
          onChange={handleChange}
        />
        <span id="input-name-error" className="error">
          {/* errorMessage */}
        </span>
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

        <button
          type="submit"
          name="button"
          className="LoginAndRegistrationWithForm__button cursor"
        >
          {"Войти"}
        </button>
        {
          <p className="login__register-text">
            Уже зарегистрированы?{" "}
            <Link className="login__register-link" to="/sign-up">
              Войти
            </Link>
          </p>
        }
      </div>
    </form>
  );
}
