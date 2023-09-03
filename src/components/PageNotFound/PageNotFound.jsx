import "./PageNotFound.css";

export default function PageNotFound({ onClickBack }) {
  return (
    <section className="PageNotFound">
      <div className="PageNotFound__container">
        <div className="PageNotFound__text-container">
          <div className="PageNotFound__title">404</div>
          <div className="PageNotFound__subtitle">Страница не найдена</div>
        </div>
        <button className="PageNotFound__link" onClick={onClickBack}>
          Назад
        </button>
      </div>
    </section>
  );
}
