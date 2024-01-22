import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Search from './components/Search'
import Header from './components/Header'

import {Route, Routes} from "react-router-dom"

import './App.css'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<><Home/></>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>   

    </>

  
  )
}

export default App
