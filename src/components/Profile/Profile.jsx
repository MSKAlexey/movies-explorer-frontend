import "./Profile.css";
import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ logOut, onClickExit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const setUserData = useContext(CurrentUserContext);

  return (
    <div className="Profile">
      <div className="Profile__container">
        <div className="Profile__top-container">
          <h1 className="Profile__title">{`Привет, ${setUserData.name ?? ''}!`}</h1>
          <form action="" className="Profile__form">
            <div className="Profile__input-container">
              <span className="Profile__placeholder">Имя</span>
              <input
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                className="Profile__input"
                placeholder="Введите имя"
                value={values.name ?? ""}
                onChange={handleChange}
              />
            </div>
            <div className="Profile__input-container">
              <span className="Profile__placeholder">E-mail</span>
              <input
                className="Profile__input"
                placeholder="pochta@yandex.ru"
                name="email"
                type="email"
                value={values.email ?? ""}
                required
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="Profile__buttons-container">
          <button className="Profile__edit-button cursor">Редактировать</button>
          <button className="Profile__exit-button cursor" onClick={logOut}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}
