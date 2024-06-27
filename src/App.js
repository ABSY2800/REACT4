import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://via.placeholder.com/150',
      rating: 9
    },
    {
      title: 'La Nouvelle Maman',
      description: 'A journey through space and time',
      posterURL: 'https://www.wiflix.al/317007-la-nouvelle-femme',
      rating: 8
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [winner, setWinner] = useState(null); // Nouvel état pour stocker le film gagnant

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const filterByTitle = (title) => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  const filterByRating = (rating) => {
    setFilteredMovies(
      movies.filter((movie) => movie.rating >= rating)
    );
  };

  const chooseWinner = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setWinner(movies[randomIndex]);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold mb-8">My Favorite Movies</h1>
      <Filter
        filterByTitle={filterByTitle}
        filterByRating={filterByRating}
        addMovie={addMovie}
      />
      <button
        onClick={chooseWinner}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Choisir un gagnant
      </button>
      {winner && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-2xl font-bold">Film gagnant</h2>
          <p><strong>Titre :</strong> {winner.title}</p>
          <p><strong>Description :</strong> {winner.description}</p>
          <p><strong>Note :</strong> {winner.rating}</p>
          <img src={winner.posterURL} alt={winner.title} className="mt-2 w-32 h-48" />
        </div>
      )}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
