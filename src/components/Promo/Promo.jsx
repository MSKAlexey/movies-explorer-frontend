import "./Promo.css";
import promoLogo from "../../images/promoLogo.svg";

export default function Promo() {
  return (
    <section className="Promo">
      <div className="Promo__container">
        <div className="Promo__title-container">
          <p className="Promo__title">
            Учебный проект студента факультета Веб-разработки.
          </p>
        </div>
        <div className="Promo__logo">
          <img className="Promo__logo-img" src={promoLogo} alt="Логотип" />
        </div>
      </div>
    </section>
  );
}
