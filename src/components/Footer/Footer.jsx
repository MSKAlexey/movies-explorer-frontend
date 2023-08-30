import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p className="Footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="Footer__text-container">
          <p className="Footer__subtitle">Яндекс.Практикум</p>
          <p className="Footer__git">Github</p>
          <p className="Footer__copyright">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
