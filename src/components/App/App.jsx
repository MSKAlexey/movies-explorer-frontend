import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import api from "../../utils/Api";
import * as auth from "../../utils/Auth";
import PageNotFound from "../PageNotFound/PageNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";

export default function App() {
  const handleClickToBack = () => navigate("/");
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isInfoTolltip, setIsInfoTolltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // const [isOpenMenu, setIsOpenMenu] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // const handleMenuClick = () => setIsOpenMenu(!isOpenMenu);

  const handleLogin = (email) => {
    setLoggedIn(true);
    setUserData(email);
  };

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    // debugger
    if (jwt) {
      auth
        .getContent()
        .then((user) => {
          handleLogin(user.email);
          navigate("/");
        })
        .catch(console.log);
    }
  }
  // проверка токена при ребуте страницы
  useEffect(() => {
    tokenCheck();
  }, []);
  // открытия попапов
  function handleMenuClick() {
    setIsMenuPopup(true);
  }
  // закрытие всех попапов
  function closeAllPopups() {
    setIsMenuPopup(false);
  }
  // ставим лайк картинке, середечко становиться черного цвета
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.log);
  }
  // удаляем карточку, возможно удалять только карточки которые сами создали
  function handleCardDelete(card) {
    // setDeleteCardPopupOpen(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.log);
  }
  // добавляем новую карточку, оба поля обязательны для заполнения
  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.log);
  }
  // редактируем имя и профессию профиля
  // function handleUpdateUser(data) {
  //   api
  //     .changeUserInfo(data)
  //     .then((data) => {
  //       setCurrentUser(data);
  //       closeAllPopups();
  //     })
  //     .catch(console.log);
  // }
  // // изменяем картинку аватара пользователя
  // function handleUpdateAvatar(data) {
  //   api
  //     .changeUserAvatar(data)
  //     .then((data) => {
  //       setCurrentUser(data);
  //       closeAllPopups();
  //     })
  //     .catch(console.log);
  // }
  // субмит формы регистрации
  function handelRegisterSubmit({ email, password }) {
    auth
      .register({ email, password })
      .then(() => {
        // setIsRegisterPopupOpen(true);
        setIsInfoTolltip(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        setIsInfoTolltip(false);
        // setErrorMessage(err);   При переключении страниц регистрации/логин ошибка остается старая, то есть с не удачной попытки регистрации бует отображатся на странице логина
        console.log(err);
      });
    // .finally(setIsRegisterPopupOpen(true));
  }
  // субмит формы входа
  function handelLoginSubmit({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          handleLogin(email);
          navigate("/main");
        }
      })
      .catch((err) => {
        setIsInfoTolltip(false);
        // setErrorMessage(err);
        console.log(err);
      });
  }
  // хук для начальной загрузки карточек с сервера и получение имя и профессии пользователя профиля. проверка на присутствие jwt токена в локальном хранилище
  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([data, card]) => {
          setCurrentUser(data);
          setCards(card);
        })
        .catch(console.log);
    }
  }, [loggedIn]);
  // удаляем jwt токен из локального хранилища и выходим из профиля
  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    // setErrorMessage('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App__container">
          <Routes>
            <Route
              path="/123"
              element={
                <>
                  <ProtectedRoute
                    loggedIn={loggedIn}
                    element={Main}
                    onCardLike={handleCardLike}
                    cards={cards}
                    onCardDelete={handleCardDelete}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/sign-in"
              element={
                <Login
                  handelLoginSubmit={handelLoginSubmit}
                  // errorMessage={errorMessage}
                />
              }
            />

            <Route
              path="/sign-up"
              element={
                <Register
                  handelRegisterSubmit={handelRegisterSubmit}
                  errorMessage={errorMessage}
                />
              }
            />

            <Route
              path="/not"
              element={<PageNotFound onClickBack={handleClickToBack} />}
            />

            <Route
              path="/"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    isOpenMenu={isOpenMenu}
                    onClickMenu={handleMenuClick}
                  />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <MenuPopup onClose={closeAllPopups} isOpen={isMenuPopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}
