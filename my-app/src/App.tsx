import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/NavBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AboutPage from './about';
import Home from './Home';
import NotFoundPage from './NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
