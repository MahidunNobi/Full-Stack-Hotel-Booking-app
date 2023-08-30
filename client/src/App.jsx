import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel"
import Navbar from './componants/Navbar'
import Footer from './componants/Footer/Footer'
import Login from './pages/login/login'

function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='hotels' element={<List />} />
          <Route path='hotels/:id' element={<Hotel />} />
          <Route path='login' element={<Login />} />
        </Routes>
      <Footer/>     
    </>
  )
}

export default App
