import "./Profile.css";
import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ logOut, isSubmit, onSubmit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const setUserData = useContext(CurrentUserContext);

  const isRequiredСondition =
    !isValid ||
    (setUserData.name === values.name && setUserData.email === values.email);

  useEffect(() => {
    if (setUserData) resetForm(setUserData, {}, true);
  }, [setUserData, resetForm]);

  function handelSubmit(e) {
    e.preventDefault();
    // debugger;
    onSubmit(values);
  }

  return (
    <section className="Profile">
      <main className="Profile__container">
        <div className="Profile__top-container">
          <h1 className="Profile__title">{`Привет, ${
            setUserData.name ?? ""
          }!`}</h1>
          <form className="Profile__form" onSubmit={handelSubmit}>
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
            <div className="Profile__buttons-container">
              <button
                className="Profile__edit-button cursor"
                disabled={isRequiredСondition || isSubmit}
              >
                Редактировать
              </button>
              <button className="Profile__exit-button cursor" onClick={logOut}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}
