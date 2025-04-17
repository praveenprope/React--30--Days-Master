import React from "react";

const UserCard = ({ id, name, email, bio, image }) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 w-72 shadow-lg hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-105 group">
      <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white text-[10px] px-2 py-1 rounded-full shadow-md">
        ID: {id}
      </div>

      <div className="flex flex-col items-center text-white">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-400 shadow-lg group-hover:shadow-purple-500 transition duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-indigo-400 animate-pulse opacity-30"></div>
        </div>

        <h2 className="text-2xl font-bold mt-3 drop-shadow-md">{name}</h2>
        <p className="text-sm text-indigo-200 font-medium mt-1">{email}</p>
        <p className="text-sm text-indigo-100 mt-3 text-center">{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
