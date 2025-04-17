import React from "react";
import moviedata from "./data/moviedata";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-12 drop-shadow-lg tracking-wide animate-fade-in">
        🎬 Movie Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {moviedata.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            genre={movie.genre}
            rating={movie.rating}
            duration={movie.duration}
            description={movie.description}
            image={movie.image}
          />
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;
