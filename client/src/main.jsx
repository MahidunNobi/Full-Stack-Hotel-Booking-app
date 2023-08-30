import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './Context/SearchContext.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider> 
      <SearchContextProvider> 
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
