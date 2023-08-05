import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register'
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Popup from '../Popup/Popup';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  function handleBurgerClick() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }
  
  return (
      <div className="app">
        <Routes>
          <Route exact path='/' element={
            <>
              <Header onBurgerClick={handleBurgerClick} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <>
              <Header onBurgerClick={handleBurgerClick}/>
              <Movies />
              <Footer />
              <Popup isOpen={isPopupOpened} onClose={closePopup} />
            </>
          } />
          <Route path='/saved-movies' element={
            <>
              <Header onBurgerClick={handleBurgerClick}/>
              <SavedMovies />
              <Footer />
              <Popup isOpen={isPopupOpened} onClose={closePopup}/>
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header onBurgerClick={handleBurgerClick}/>
              <Profile />
            </>
          } />
          <Route path='/sign-up'
            element={
              <>
                <Register />
              </>
            } />
          <Route path='/sign-in'
            element={
              <Login />
            }
          />
          <Route path='*'
            element={
              <NotFound />
            }
          />
        </Routes>
      </div>
  );
}

export default App;
