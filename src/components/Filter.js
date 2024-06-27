import React from 'react';

const Filter = ({ filterByTitle, filterByRating, addMovie }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [posterURL, setPosterURL] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [searchTitle, setSearchTitle] = React.useState('');
  const [searchRating, setSearchRating] = React.useState('');

  const handleAddMovie = () => {
    addMovie({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Filter Movies</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => {
          setSearchTitle(e.target.value);
          filterByTitle(e.target.value);
        }}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="number"
        placeholder="Search by rating"
        value={searchRating}
        onChange={(e) => {
          setSearchRating(e.target.value);
          filterByRating(e.target.value);
        }}
        className="mb-4 p-2 border rounded w-full"
      />

      <h2 className="text-2xl mb-4">Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <button
        onClick={handleAddMovie}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Movie
      </button>
    </div>
  );
};

export default Filter;
