
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Listarticles from "./components/client/Listarticles"



function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/articlesclient" element={<Listarticles/>}/>
      </Routes>

     </Router>
    </>
  )
}

export default App
