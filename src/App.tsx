import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center bg-black h-screen justify-center">
      <h1 className=" text-white text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
