import "./Profile.css";
import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ logOut, onSubmit }) {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  const isRequiredСondition =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  useEffect(() => {
    if (currentUser) resetForm(currentUser, {}, true);
  }, [currentUser, resetForm]);

  function handelSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="Profile">
      <main className="Profile__container">
        <div className="Profile__top-container">
          <h1 className="Profile__title">{`Привет, ${
            currentUser.name ?? ""
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
                disabled={isRequiredСondition}
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
