import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import './App.css';
import Filter from './components/Filter';

const App = () => {
  const defaultFilms = [
    {
      title: 'Inception',
      description: 'bbhb hb',
      posterUrl: 'film.jpg',
      rating: '8.9',
      trailerUrl: 'https://youtu.be/HcoZbHBDHQA?si=_fv9Crki90aM542N'
    }
  ];

  const [films, setFilms] = useState(defaultFilms);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
