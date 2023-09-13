import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import * as auth from "../../utils/Auth";
import PageNotFound from "../PageNotFound/PageNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import mainApi from "../../utils/MainApi";

export default function App() {
  const navigate = useNavigate();
  const handleClickToRedirectMainPage = () => navigate("/");
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isInfoTolltip, setIsInfoTolltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);

  // проверка токена
  function tokenCheck() {
    auth
      .getContent()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(console.log);
  }

  // проверка токена при ребуте страницы
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      tokenCheck();
    }
  }, []);

  // открытие попапов
  function handleMenuClick() {
    setIsMenuPopup(true);
  }
  // закрытие попапов
  function closeAllPopups() {
    setIsMenuPopup(false);
    setIsRegisterPopupOpen(false);
  }

  // субмит формы регистрации
  function handelRegisterSubmit({ name, email, password }) {
    auth
      .register({ name, email, password })
      .then(() => {
        setIsRegisterPopupOpen(true);
        setIsInfoTolltip(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        setIsInfoTolltip(false);
        console.log(err);
      })
      .finally(setIsRegisterPopupOpen(true));
  }

  // субмит формы входа
  function handelLoginSubmit({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setIsInfoTolltip(false);
        setIsRegisterPopupOpen(true);
        console.log(err);
      });
  }
  // хук для начальной загрузки карточек с сервера и получение имя и профессии пользователя профиля. проверка на присутствие jwt токена в локальном хранилище
  useEffect(() => {
    // debugger
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo()])
        .then(([data]) => {
          setLoggedIn(true);
          setCurrentUser(data);
        })
        .catch(console.log);
    }
  }, [loggedIn]);

  // удаляем jwt токен из локального хранилища, выходим из профиля, очищаем данные пользователя
  // и переходим на главную страницу
  function logOut() {
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
    // setUserData({});
    setFirstSubmit(true);
  }

  // субмит формы редактирования данных пользователя
  function handleUpdateUser(data) {
    // debugger
    mainApi
      .changeUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        setIsRegisterPopupOpen(true);
        setIsInfoTolltip(true);
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App__container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    isOpenMenu={isMenuPopup}
                    onClickMenu={handleMenuClick}
                  />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path="/movies"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    isOpenMenu={isMenuPopup}
                    onClickMenu={handleMenuClick}
                  />
                  <Movies
                    firstSubmit={firstSubmit}
                    setFirstSubmit={setFirstSubmit}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/saved-movies"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    isOpenMenu={isMenuPopup}
                    onClickMenu={handleMenuClick}
                  />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />

            <Route
              path="/sign-in"
              element={
                <Login
                  handelLoginSubmit={handelLoginSubmit}
                  // isSubmit={isSubmit}
                />
              }
            />

            <Route
              path="/sign-up"
              element={
                <Register
                  handelRegisterSubmit={handelRegisterSubmit}
                  // isSubmit={isSubmit}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    isOpenMenu={isMenuPopup}
                    onClickMenu={handleMenuClick}
                  />
                  <Profile
                    logOut={logOut}
                    onSubmit={handleUpdateUser}
                    onClickExit={handleClickToRedirectMainPage}
                  />
                </>
              }
            />

            <Route
              path="/pagenotfound"
              element={
                <PageNotFound onClickBack={handleClickToRedirectMainPage} />
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <MenuPopup onClose={closeAllPopups} isOpen={isMenuPopup} />

        <InfoTooltip
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          name={"register"}
          statusRegister={isInfoTolltip}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
