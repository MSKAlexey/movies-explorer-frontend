import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="AboutProject">
      <div className="AboutProject__container">
        <p className="AboutProject__title">О проекте</p>
        <div className="AboutProject__table">
          <div className="AboutProject__table-element">
            <p className="AboutProject__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="AboutProject__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="AboutProject__table-element">
            <p className="AboutProject__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="AboutProject__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="AboutProject__period">
          <div className="AboutProject__back-end">
            <p className="AboutProject__back-end_time">1 неделя</p>
            <p className="AboutProject__back-end_name">Back-end</p>
          </div>
          <div className="AboutProject__front-end">
            <p className="AboutProject__front-end_time">4 недели</p>
            <p className="AboutProject__front-end_name">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}
