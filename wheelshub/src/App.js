import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import MyCarsPage from './routes/MyCarsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mycars" element={<MyCarsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;