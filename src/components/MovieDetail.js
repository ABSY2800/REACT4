// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import movies from './movies';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = movies.find(m => m.id === parseInt(id));

//   if (!movie) {
//     return <div>Film non trouvé</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.description}</p>
//       <div className="trailer">
//         <iframe 
//           width="560" 
//           height="315" 
//           src={movie.trailerLink} 
//           title={movie.title} 
//           frameBorder="0" 
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//           allowFullScreen>
//         </iframe>
//       </div>
//       <Link to="/">Retour à l'accueil</Link>
//     </div>
//   );
// };

// export default MovieDetail;
// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import movies from './movies';

// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import movies from './movies';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = movies.find(m => m.id === parseInt(id));

//   if (!movie) {
//     return <div>Film non trouvé</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
//       <p>{movie.description}</p>
//       <div className="trailer">
//         <iframe 
//           width="560" 
//           height="315" 
//           src={movie.trailerUrl} 
//           title={movie.title} 
//           frameBorder="0" 
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//           allowFullScreen>
//         </iframe>
//       </div>
//       <Link to="/">Retour à l'accueil</Link>
//     </div>
//   );
// };

// export default MovieDetail;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import movies from './movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe 
          width="560" 
          height="315" 
          src={movie.trailerUrl} 
          title={movie.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetail;

