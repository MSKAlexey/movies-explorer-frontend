import logo from "../../images/logo.svg";
import "./LoginAndRegistrationWithForm.css";

function LoginAndRegistrationWithForm({
  titleText,
  buttonText,
  onSubmit,
  children,
  logIn,
}) {
  return (
    <>
      <img
        className="LoginAndRegistrationWithForm__logo"
        src={logo}
        alt="Логотип"
      />

      <form className="LoginAndRegistrationWithForm" onSubmit={onSubmit}>
        <div className="LoginAndRegistrationWithForm__container">
          <h1 className="LoginAndRegistrationWithForm__title">{titleText}</h1>

          {children}

          <button
            type="submit"
            name="button"
            className="LoginAndRegistrationWithForm__button cursor"
          >
            {buttonText}
          </button>
          {logIn}
        </div>
      </form>
    </>
  );
}
export default LoginAndRegistrationWithForm;
