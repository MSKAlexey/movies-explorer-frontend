import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import { ProtectedRoute } from "../ProtectedRoute";
import * as auth from "../../utils/Auth";
import PageNotFound from "../PageNotFound/PageNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import api from "../../utils/Api";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

export default function App() {
  const navigate = useNavigate();
  const handleClickToRedirectMainPage = () => navigate("/");
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isInfoTolltip, setIsInfoTolltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ email: "" });
  const [like, isLiked] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent()
        .then(() => {
          setLoggedIn(true);
          navigate("/");
        })
        .catch(console.log);
    }
  }

  // проверка токена при ребуте страницы
  useEffect(() => {
    tokenCheck();
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
          navigate("/");
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
      Promise.all([api.getUserInfo(), moviesApi.getMovies()])
        .then(([data, cards]) => {
          setLoggedIn(true);
          setCurrentUser(data);
          setCards(cards);
          console.log(cards);
        })
        .catch(console.log);
    }
  }, [loggedIn]);

  // удаляем jwt токен из локального хранилища, выходим из профиля, очищаем данные пользователя
  // и переходим на главную страницу
  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate("/");
    setUserData({});
  }

  // редактируем данные пользователя
  function handleUpdateUser(data) {
    mainApi
      .changeUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
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
                  <Movies cards={cards} like={like} />
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
                  <SavedMovies like={like} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/sign-in"
              element={
                <Login
                  handelLoginSubmit={handelLoginSubmit}
                  isSubmit={isSubmit}
                />
              }
            />

            <Route
              path="/sign-up"
              element={
                <Register
                  handelRegisterSubmit={handelRegisterSubmit}
                  isSubmit={isSubmit}
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
                    Submit={isSubmit}
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
