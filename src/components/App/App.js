import React from 'react';
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
  
  return (
      <div className="app">
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <>
              <Header />
              <Movies />
              <Footer />
              <Popup />
            </>
          } />
          <Route path='/saved-movies' element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
              <Popup />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header />
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
