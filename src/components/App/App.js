import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register'
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Popup from '../Popup/Popup';
import { auth } from '../../utils/auth';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { SHORT_DURATION } from '../../utils/constants';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [currentUser, setCurentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [foundMoviesSaved, setFoundMoviesSaved] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [keyWordSaved, setKeySavedWord] = useState("");
  const [isShortsOnly, setIsShortsOnly] = useState(false);
  const [isShortsOnlySaved, setIsShortsOnlySaved] = useState(false);
  const [isProfileEditSuccesful, setIsProfileEditSuccesful] = useState(false);
  const [isProfileEditFailed, setIsProfileEditFailed] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [wasThereASearch, setWasThereASearch] = useState(false);
  const [wasThereASearchSaved, setWasThereASearchSaved] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


//попап
  function handleBurgerClick() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

//получение начальных данных
  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        mainApi.getProfile(),
        mainApi.getMovies(),
        moviesApi.getMovies()
      ])
        .then(([profile, savedMovies, movies]) => { //попадаем сюда, когда оба промиса будут выполнены
          setCurentUser(profile);
          setSavedMovies(savedMovies);
          setMovies(movies);
          localStorage.setItem('allMovies', JSON.stringify(movies));
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch((err)=>{ //попадаем сюда если один из промисов будет завершаться ошибкой
          console.log(err);
        })
    } 
  }, [loggedIn]);

  //для повторного входа
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const pathname = location.pathname;

    if (token) {
      auth.getContent(token)
        .then((res) => {
          setLoggedIn(true);
          mainApi.setToken(token);
          if (localStorage.getItem('foundMovies') || localStorage.getItem('savedMovies') || localStorage.getItem('keyWord') || localStorage.getItem('checkbox')) {
            setWasThereASearch(true);
            const moviesFound = localStorage.getItem('foundMovies');
            setFoundMovies(JSON.parse(moviesFound));
            const moviesSaved = localStorage.getItem('savedMovies');
            setSavedMovies(JSON.parse(moviesSaved));
            const keyWordStorage = localStorage.getItem('keyWord');
            setKeyWord(JSON.parse(keyWordStorage));
            const checkboxStorage = localStorage.getItem('checkbox');
            setIsShortsOnly(JSON.parse(checkboxStorage));
          }
          
          if (pathname === '/sign-up' || pathname === '/sign-up') {
            navigate('/movies', { replace: true })  
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

//восстанавливаем сохраненные при переходе на фильмы
  useEffect(() => {
    const pathname = location.pathname;
      if ((pathname === '/movies') && localStorage.getItem('savedMovies')) {
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      }
    } 
  )

//переключатель... наверное, это можно как-то оптимизировать, но я уже не могу
  function handleCheckbox() {
    const pathname = location.pathname;
    if (pathname === '/movies') {
      if (keyWord) {
        if (isShortsOnly) {
          localStorage.setItem('checkbox', JSON.stringify(false));
          setIsShortsOnly(false);
        } else {
          localStorage.setItem('checkbox', JSON.stringify(true));
          setIsShortsOnly(true);
        }
      } else {
        localStorage.setItem('checkbox', JSON.stringify(false));
          setIsShortsOnly(false);
      }
    } else {
      if (keyWordSaved) {
        if (isShortsOnlySaved) {
          setIsShortsOnlySaved(false);
        } else {
          setIsShortsOnlySaved(true);
        }
      } else {
        setIsShortsOnlySaved(false);
      }
    }
  }

//поиск по фильмам
  function filterMoviesAll({ movieName }) {
    const shortDuration = SHORT_DURATION;

    setWasThereASearch(true);
    setShowPreloader(true);
    localStorage.setItem('keyWord', JSON.stringify(movieName));
    setKeyWord(movieName);
    
    if (isShortsOnly) {
      const foundMoviesShort = movies.filter((movie) => {
        return movie.duration <= shortDuration && (movie.nameRU.toLowerCase().includes(movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieName.toLowerCase()));
      })
      localStorage.setItem('foundMovies', JSON.stringify(foundMoviesShort));
      setFoundMovies(foundMoviesShort);
    } else {
      const foundMoviesAll = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieName.toLowerCase());
      })
      localStorage.setItem('foundMovies', JSON.stringify(foundMoviesAll));
      setFoundMovies(foundMoviesAll);
    }
    setShowPreloader(false);
  }

// поиск по сохраненным фильмам -- не сохраняется при перезагрузке
  function filterMoviesSaved({ movieName }) {
    const shortDuration = SHORT_DURATION;

    setWasThereASearchSaved(true);
    setShowPreloader(true);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    setKeySavedWord(movieName);

    if (isShortsOnlySaved) {
      const foundMoviesShortSaved = savedMovies.filter((movie) => {
        return movie.duration <= shortDuration && (movie.nameRU.toLowerCase().includes(movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieName.toLowerCase()));
      })
      setFoundMoviesSaved(foundMoviesShortSaved);//не меняет local storage или данные на сервере, т.ч. при перезагрузке восстановится
    } else {
      const foundMoviesAllSaved = savedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieName.toLowerCase());
      })
      setFoundMoviesSaved(foundMoviesAllSaved);
    }
    setShowPreloader(false);
  }

//сохранение фильма
  function checkLike(movie) {
    return savedMovies.some((item) => item.movieId === movie.id);
  };
  
  function handleMovieSave(movie) {
      mainApi.saveMovie(movie)
        .then((newMovie) => {
          setSavedMovies([newMovie, ...savedMovies]);
          localStorage.setItem('savedMovies', JSON.stringify([newMovie, ...savedMovies]));
          console.log(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  
//удаление фильма
  function handleMovieDelete(movieId) {
    mainApi.deleteMovie(movieId)
      .then(() => {
        const newArray = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(newArray);
        localStorage.setItem('savedMovies', JSON.stringify(newArray));
      })
      .catch((err) => {
          console.log(err);
        })
  }

//регистрация
  function handleSignup({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        if (res) {
          handleSignin({ email, password });
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
//авторизация
  function handleSignin({ email, password }) {
    auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          mainApi.setToken(res.token);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

//изменение профиля
  function handleUpdateUser({ name, email }) {
  mainApi.editProfile(name, email)
    .then((profile) => {
      setCurentUser(profile);
      setIsProfileEditSuccesful(true);
    })
    .catch((err) => {
      console.log(err);
      setIsProfileEditFailed(true);
    })
  }
  
//выход
  function handleSignout() {
    setLoggedIn(false);
    localStorage.clear();
    navigate('/', { replace: true })
  }
  
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path='/sign-up'
            element={
              <Register onRegister={handleSignup} />
            } />
          <Route path='/sign-in'
            element={
              <Login onLogin={handleSignin}/>
            }
          />
          <Route path='*'
            element={
              <NotFound />
            }
          />
          <Route path='/' element={
            <>
              <Header onBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <>
              <Header onBurgerClick={handleBurgerClick} loggedIn={loggedIn}/>
              <ProtectedRoute
                element={Main}
                loggedIn={loggedIn}
                movies={movies}
                foundMovies={foundMovies}
                showPreloader={showPreloader}
                onFilter={filterMoviesAll}
                onCheckbox={handleCheckbox}
                isShortsOnly={isShortsOnly}
                keyWord={keyWord}
                wasThereASearch={wasThereASearch}
                onSave={handleMovieSave}
                onDelete={handleMovieDelete}
                savedMovies={savedMovies}
                checkLike={checkLike}
              />
              <Footer />
              <Popup isOpen={isPopupOpened} onClose={closePopup} />
            </>
          } />
          <Route path='/saved-movies' element={
            <>
              <Header onBurgerClick={handleBurgerClick} loggedIn={loggedIn}/>
              <ProtectedRoute
                element={Main}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                showPreloader={showPreloader}
                onFilterSaved={filterMoviesSaved}
                onCheckbox={handleCheckbox}
                isShortsOnlySaved={isShortsOnlySaved}
                wasThereASearchSaved={wasThereASearchSaved}
                onSave={handleMovieSave}
                onDelete={handleMovieDelete}
                checkLike={checkLike}
                foundMoviesSaved={foundMoviesSaved}
                keyWordSaved={keyWordSaved}
              />
              <Footer />
              <Popup isOpen={isPopupOpened} onClose={closePopup}/>
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header onBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onEdit={handleUpdateUser}
                onExit={handleSignout}
                isSuccess={isProfileEditSuccesful}
                isFail={isProfileEditFailed}
                />
            </>
          } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
