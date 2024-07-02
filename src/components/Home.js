// import React from 'react';
// import { Link } from 'react-router-dom';
// import movies from './movies'; // Un fichier JSON ou un tableau d'objets de films
// import MovieCard from './MovieCard';

// const Home = () => {
//   return (
//     <div>
//       <h1>Liste des Films</h1>
//       <div className="movie-list">
//         {movies.map(movie => (
//           <Link to={`/movie/${movie.id}`} key={movie.id}>
//             <MovieCard movie={movie} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import movies from './movies'; // Assurez-vous que ce chemin est correct
import MovieCard from './MovieCard';

const Home = () => {
  return (
    <div>
      <h1>Liste des Films</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

