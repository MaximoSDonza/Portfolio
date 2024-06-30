import { Navigate, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import Projects from "./routes/Projects"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="h-screen bg-white-100">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/*' element={ <Navigate to="/"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
