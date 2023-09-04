import { Link } from "react-router-dom";
import "./MenuPopup.css";

export default function MenuPopup({ onClose, isOpen }) {
  return (
    <div
      className={isOpen ? `Popup Popup_menu  Popup_opened` : `Popup Popup_menu`}
    >
      <div className="Popup__container">
        <div className="Popup__link-container">
          <Link className="Popup__link">Главная</Link>
          <Link className="Popup__link">Фильмы</Link>
          <Link className="Popup__link">Сохранённые фильмы</Link>
        </div>
        <Link className="Popup__account">
          <div className="Popup__account-text">Аккаунт</div>
          <div className="Popup__account-image"></div>
        </Link>
        <button
          type="button"
          className="Popup__close cursor"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
