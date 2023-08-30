import "./AboutMe.css";
import I from "../../images/I.jpg";

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <div className="AboutMe__container">
        <p className="AboutMe__title">Студент</p>
        <div className="AboutMe__block-container">
          <img className="AboutMe__photo" src={I} alt="Дёмин Алексей" />
          <div className="AboutMe__text-container">
            <p className="AboutMe__subtitle">Виталий</p>
            <p className="AboutMe__age">Фронтенд-разработчик, 30 лет</p>
            <p className="AboutMe__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <p className="AboutMe__git">Github</p>
          </div>
        </div>
      </div>
    </section>
  );
}
