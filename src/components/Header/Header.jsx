import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.svg";

export default function Header({ loggedIn, isOpenMenu, onClickMenu }) {
  const location = useLocation();

  return (
    <header
      className={`Header__container Header_background-color_${
        location.pathname === "/" ? "landing" : "main"
      }`}
    >
      <Link href="/">
        <img className="Header__logo" src={logo} alt="Логотип" />
      </Link>

      <Navigation
        loggedIn={loggedIn}
        isOpenMenu={isOpenMenu}
        onClickMenu={onClickMenu}
      />
    </header>
  );
}
