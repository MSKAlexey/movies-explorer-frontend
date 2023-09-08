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
        <ul className="AboutProject__period">
          {/* <li className="AboutProject__back-end AboutProject__period_time_position"> */}
          <li className="AboutProject__back-end AboutProject__period_time_position">
            1 неделя
          </li>
          {/* <li className="AboutProject__front-end AboutProject__period_time_position"> */}
          <li className="AboutProject__front-end AboutProject__period_time_position">
            4 недели
          </li>
          <li className="AboutProject__back-end_name AboutProject__period_name_position">
            Back-end
          </li>
          <li className="AboutProject__front-end_name AboutProject__period_name_position">
            Front-end
          </li>
        </ul>
      </div>
    </section>
  );
}
