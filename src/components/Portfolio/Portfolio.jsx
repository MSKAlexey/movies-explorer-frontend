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
              to="https://github.com/MSKAlexey/how-to-learn"
              alt="Галочка белого цвета"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </Link>
          </li>
          <li className="Portfolio__column">
            <Link
              className="Portfolio__link"
              to="https://github.com/MSKAlexey/russian-travel"
              alt="Галочка белого цвета"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </Link>
          </li>
          <li className="Portfolio__column">
            <Link
              className="Portfolio__link"
              to="https://github.com/MSKAlexey/react-mesto-api-full-gha"
              alt="Галочка белого цвета"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
