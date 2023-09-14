import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import * as auth from "../../utils/Auth";
import PageNotFound from "../PageNotFound/PageNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import mainApi from "../../utils/MainApi";
import ProtectedRoutes from "../ProtectedRoute";

export default function App() {
  const navigate = useNavigate();
  const handleClickToRedirectMainPage = () => navigate("/");
  const currentLocation = useLocation();
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isInfoTolltip, setIsInfoTolltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);
  const headerDisableToPages = ["/", "/movies", "/saved-movies", "/profile"];
  const handleHeaderDisableToPages = (routes) =>
    routes.some((route) => route === currentLocation.pathname);

    console.log(loggedIn)
  // проверка токена при ребуте страницы
  useEffect(() => {
    tokenCheck();
  }, []);

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent()
        .then(() => {
          setLoggedIn(true);
        })
        .catch(console.log);
    }
  }

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
  // хук для начальной загрузки данных профиля. проверка на присутствие jwt токена в локальном хранилище
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
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
    setFirstSubmit(true);
  }

  // субмит формы редактирования данных пользователя
  function handleUpdateUser(data) {
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
          {handleHeaderDisableToPages(headerDisableToPages) && (
            <Header
              loggedIn={loggedIn}
              isOpenMenu={isMenuPopup}
              onClickMenu={handleMenuClick}
            />
          )}
          <Routes>
            <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
              <Route
                path="/movies"
                element={
                  <>
                    <Movies
                      firstSubmit={firstSubmit}
                      setFirstSubmit={setFirstSubmit}
                    />
                  </>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <>
                    <SavedMovies />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <Profile
                      logOut={logOut}
                      onSubmit={handleUpdateUser}
                      onClickExit={handleClickToRedirectMainPage}
                    />
                  </>
                }
              />
            </Route>

            <Route
              path="/"
              element={
                <>
                  <Main />
                </>
              }
            />

            <Route
              path="/sign-in"
              element={
                !loggedIn ? (
                  <Login handelLoginSubmit={handelLoginSubmit} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/sign-up"
              element={
                !loggedIn ? (
                  <Register handelRegisterSubmit={handelRegisterSubmit} />
                ) : (
                  <Navigate to="/" />
                )
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
          {handleHeaderDisableToPages(headerDisableToPages) && <Footer />}
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
