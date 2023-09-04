import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__container">
        <input type={"checkbox"} className="FilterCheckbox__input" />
        <span className="FilterCheckbox__slider"></span>
        <span className="FilterCheckbox__slider-text">Короткометражки</span>
      </label>
    </div>
  );
}
