import React from 'react';

const MovieCard = ({ id, title, year, director, genre, rating, duration, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80 hover:shadow-xl transform hover:scale-105 transition duration-300">
      {/* Movie Poster */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top "
      />

      {/* Movie Info */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{year} • {genre} • {duration} mins</p>

        <p className="text-sm text-gray-700"><span className="font-semibold">Director:</span> {director}</p>
        <p className="text-sm text-gray-700"><span className="font-semibold">Rating:</span> ⭐ {rating}/10</p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-3">{description}</p>

        <p className="mt-4 text-xs text-gray-400">Movie ID: {id}</p>
      </div>
    </div>
  );
};

export default MovieCard;
