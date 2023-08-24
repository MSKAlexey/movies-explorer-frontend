import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="AboutProject">
      <div className="AboutProject__container">
        <h2 className="AboutProject__title">О проекте</h2>
        <h2 className="AboutProject__subtitle">
          Дипломный проект включал 5 этапов
        </h2>
        <p className="AboutProject__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className="AboutProject__subtitle">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="AboutProject__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="AboutProject__period">
        <div className="AboutProject__back-end">
          <span className="AboutProject__back-end_week">1 неделя</span>
          <span className="AboutProject__back-end_name">Back-end</span>
        </div>
        <div className="AboutProject__front-end">
          <span className="about-project__front-end_week">4 недели</span>
          <span className="about-project__front-end_name">Front-end</span>
        </div>
      </div>
    </section>
  );
}
