import { useState } from "react"

function App() {
  const [color, setColor] = useState("#3a7d44")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("#ff0000")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#ff0000"}}>Red</button>
          <button onClick={() => setColor("#008000")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#008000"}}>Green</button>
          <button onClick={() => setColor("#0000ff")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#0000ff"}}>Blue</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
