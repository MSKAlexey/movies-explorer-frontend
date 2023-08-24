import { Link, useLocation, Routes, Route } from 'react-router-dom';
import './Header.css'

import logo from '../../images/logo.svg';

export default function Header({ loggedIn, logOut, userData }) {
 const email = userData;
 const location = useLocation();
 const linkText = location.pathname === '/sign-in' ? 'Регистрация' : 'Войти';
 const logOutText = loggedIn ? 'Выйти' : linkText;
 const currentLocation = useLocation();

 return (
  <header
  className={`Header Header_background-color_${
    currentLocation.pathname === '/' ? 'landing' : 'main'
  }`}
>

   <Link
    href='/'
   >
    <img
     className='Header__logo'
     src={logo}
     alt='Логотип'
    />
   </Link>

   <Routes>

    <Route
     path='/sign-up'
     element={
      <Link
       className='header__registet-link cursor'
       to='/sign-in'
      >
       Войти
      </Link>
     }
    />
    <Route
     path='/sign-in'
     element={
      <Link
       className='header__registet-link cursor'
       to='/sign-up'
      >
       Регистрация
      </Link>
     }
    />

   </Routes>

   {loggedIn && (
    <div  className="header__logOut">
     <p className='header__user-email'>{email}</p>
     <Link
      className='header__registet-link cursor'
      onClick={logOut}
     >
      {logOutText}
     </Link>
    </div>
   )}

  </header>
 )
}