import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import New from "./pages/New/New"
import Single from "./pages/Single/Single"
import MainLayout from './layouts/MainLayout'
import { productInputs, userInputs } from './formSource'
import "./style/dark.scss"
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
   
    <Routes>
      <Route path='/' element={<MainLayout dark={dark} setDark={setDark} />}>
        <Route index element={<Home />} />         
        <Route path='user'>
          <Route index element={<List page="user" />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<New inputs={userInputs} title={"Add New User"} />} />
        </Route>
        <Route path='products'>
          <Route index element={<List page="products" />} />
          <Route path=':id' element={<Single/>} />
          <Route path='new' element={<New inputs={productInputs} title={"Add New Product"} />} />
        </Route>
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>      
    </div>
  )
}

export default App
