import "./FilterCheckbox.css";

export default function FilterCheckbox({ shorts, setShorts }) {
  const handleChange = () => {
    setShorts(!shorts);
  };
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__container">
        <input
          type="checkbox"
          className="FilterCheckbox__input"
          checked={shorts}
          onChange={handleChange}
        />
        <span className="FilterCheckbox__slider cursor"></span>
        <span className="FilterCheckbox__slider-text">Короткометражки</span>
      </label>
    </div>
  );
}
