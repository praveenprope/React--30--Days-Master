import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');
  const Colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-lvh flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-3xl font-bold text-white">Color Changer</h1>
      <div className="flex gap-3">
        {Colors.map((col) => (
          <button
            key={col}
            style={{
              backgroundColor: col === 'black' ? 'white' : '',
              color: col === 'black' ? 'black' : '',
            }}
            onClick={() => setColor(col)}
            className="px-4 py-2 bg-white text-black rounded shadow hover:scale-105 transition-all"
          >
            {col.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
