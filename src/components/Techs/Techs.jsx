import "./Techs.css";

export default function Techs() {
  return (
    <section className="Techs">
      <div className="Techs__container">
        <div className="Techs__title-container">
          <p className="Techs__title">Технологии</p>
        </div>
        <p className="Techs__subtitle">7 технологий</p>
        <p className="Techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="Techs__table">
          <li className="Techs__column">
            <p className="Techs__ctechnology">HTML</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">CSS</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">JS</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">React</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">Git</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">Express.js</p>
          </li>
          <li className="Techs__column">
            <p className="Techs__ctechnology">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
