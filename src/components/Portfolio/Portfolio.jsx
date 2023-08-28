import "./Portfolio.css";
import I from "../../images/I.jpg";

export default function Portfolio() {
  return (
    <section className="Portfolio">
      <div className="Portfolio__container">
        <h2 className="AboutMe__title">Студент</h2>
        <img className="AboutMe__photo" src={I} alt="Дёмин Алексей" />
        <h3 className="AboutMe__subtitle">Алексей</h3>
        <p className="AboutMe__age">Фронтенд-разработчик, 30 лет</p>
        <p className="AboutMe__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>

        <h3 className="AboutMe__git">Github</h3>

        <h3 className="AboutMe__portfolio">Портфолио</h3>
      </div>
    </section>
  );
}
