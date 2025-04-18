import { useState } from 'react'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white font-sans">
      <h1 className="text-4xl font-bold mb-6">
        Counter: <span className="text-yellow-300">{count}</span>
      </h1>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 transition-all px-6 py-2 rounded-xl text-lg font-semibold shadow-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 transition-all px-6 py-2 rounded-xl text-lg font-semibold shadow-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
