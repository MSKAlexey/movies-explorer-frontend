import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="Portfolio">
      <div className="Portfolio__container">
        <h2 className="Portfolio__title">Портфолио</h2>

        <ul className="Portfolio__table">
          <li className="Portfolio__column">
            <Link
              className="Portfolio__link"
              href="#"
              alt="Галочка белого цвета"
            >
              Статичный сайт
            </Link>
          </li>
          <li className="Portfolio__column">
            <Link
              className="Portfolio__link"
              href="#"
              alt="Галочка белого цвета"
            >
              Адаптивный сайт
            </Link>
          </li>
          <li className="Portfolio__column">
            <Link
              className="Portfolio__link"
              href="#"
              alt="Галочка белого цвета"
            >
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
