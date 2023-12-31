import React from "react";
import "./InfoTooltip.css";

export default function InfoTooltip({ isOpen, onClose, name, statusRegister }) {
  return (
    <div
      className={
        isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`
      }
    >
      <div className="popup__container">
        <div
          className={`popup__register ${
            statusRegister
              ? "popup__register_type_ok"
              : "popup__register_type_fail"
          }`}
        ></div>
        <h2 className="popup__title">
          {statusRegister ? "Все получилось!" : "Что-то пошло не так!"}
        </h2>
        <button
          type="button"
          className="popup__close cursor"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
