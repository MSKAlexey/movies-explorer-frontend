import "./Profile.css";

export default function Profile({ logOut, onClickExit }) {
  return (
    <div className="Profile">
      <div className="Profile__container">
        <div className="Profile__top-container">
          <h1 className="Profile__title">Привет, Виталий!</h1>
          <form action="" className="Profile__form">
            <div className="Profile__input-container">
              <span className="Profile__placeholder">Имя</span>
              <input
                type="text"
                className="Profile__input"
                placeholder="Введите имя"
              />
            </div>
            <div className="Profile__input-container">
              <span className="Profile__placeholder">E-mail</span>
              <input
                type="text"
                className="Profile__input"
                placeholder="pochta@yandex.ru"
              />
            </div>
          </form>
        </div>
        <div className="Profile__buttons-container">
          <button className="Profile__edit-button">Редактировать</button>
          <button className="Profile__exit-button" onClick={logOut}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}
