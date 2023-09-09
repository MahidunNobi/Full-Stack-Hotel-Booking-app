import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import NewUser from "./pages/New/NewUser"
import NewHotel from "./pages/New/NewHotel"
import NewRoom from "./pages/New/NewRoom"
import Single from "./pages/Single/Single"
import MainLayout from './layouts/MainLayout'
import { roomInputs,hotelInputs, userInputs } from './formSource'
import "./style/dark.scss"
import { useState } from 'react'
import { useAuthContext } from './Context/AuthContext'

function App() {
  const [dark, setDark] = useState(false)
  const ProtectedRoute = ({children})=>{
    const {user} = useAuthContext()
    if(!user){
      return <Navigate to={"/login"} />
    }
    return children    
  }

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
   
    <Routes>
      <Route path='/login' element={<Login />} />  
      <Route path='/' element={
                        <ProtectedRoute> 
                          <MainLayout dark={dark} setDark={setDark} />
                        </ProtectedRoute>
                        }>
        <Route index element={<Home />} />         
        <Route path='users'>
          <Route index element={<List page="user" />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<NewUser inputs={userInputs} title={"Add New User"} />} />
        </Route>
        <Route path='hotels'>
          <Route index element={<List page="hotels" />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<NewHotel inputs={hotelInputs} title={"Add New Product"} />} />
        </Route>
        <Route path='rooms'>
          <Route index element={<List page="rooms" />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<NewRoom inputs={roomInputs} title={"Add New Product"} />} />
        </Route>
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>      
    </div>
  )
}

export default App
