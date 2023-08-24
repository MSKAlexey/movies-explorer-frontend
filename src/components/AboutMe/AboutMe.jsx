import "./AboutMe.css";
import I from "../../images/I.jpg";

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <div className="AboutMe__container"></div>
      <h2 className="AboutMe__title">Студент</h2>
      <img className="AboutMe__photo" src={I} alt="Дёмин Алексей" />
      <h3 className="AboutMe__subtitle">Алексей</h3>
      <p className="AboutMe__text">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
      </p>

      <h3 className="AboutMe__subtitle">Github</h3>

      <h3 className="AboutMe__subtitle">Портфолио</h3>

      <ul className="AboutMe__table">
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">Статичный сайт</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">Адаптивный сайт</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">Одностраничное приложение</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">React</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">Git</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">Express.js</p>
        </li>
        <li className="AboutMe__column">
          <p className="AboutMe__ctechnology">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}
