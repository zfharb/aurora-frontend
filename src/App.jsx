import Home from './compenents/Home'
import Login from './compenents/Login'
import Register from './compenents/Register'
import NotFound from './compenents/NotFound'
import {Link, Route, Routes} from "react-router-dom"

import './App.css'

function App() {
  return (
    <>
   <div class=" container-fluid sticky-top navbar-custom">
      <div class="row">
        <div className='col'>
          <img src="../src/images/Remove.png" class='img-fluid w-50 p-3 align-self-start' alt="..."/>
        </div>
        <div className="col-5 d-flex justify-content-center opacity-100">  
          <Link to="/">Home</Link>&nbsp;
          <Link to="/login">Login</Link>&nbsp;
          <Link to="/register">Register</Link>&nbsp;
        </div>
        <div class="col">
        </div>   
      </div>
    </div>        
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register name="navbar"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>   
    
    </>
  
  )
}

export default App
