import React from 'react';
import users from './data/user';
import UserCard from './Cards';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 py-12 px-5">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg animate-pulse">
         User Profiles
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="transform transition duration-500 hover:scale-105 hover:rotate-1"
            style={{ animation: `fadeInUp 0.4s ease-in-out ${index * 0.1}s both` }}
          >
            <UserCard
              id={user.id}
              name={user.name}
              bio={user.bio}
              email={user.email}
              image={user.image}
            />
          </div>
        ))}
      </div>

      {/* Custom animation style */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
