import { useState } from 'react'
import Home from './compenents/Home'
import Login from './compenents/Login'
import Register from './compenents/Register'
import NotFound from './compenents/NotFound'
import {Link, Route, Routes} from "react-router-dom"

import './App.css'

function App() {
  // const [seen, setSeen] = useState(false)

  // function togglePop () {
  //     setSeen(!seen);
  // };

  return (
    <>
      <div className='nav-links-container'>
        <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/login">Login</Link>&nbsp;
          <Link to="/register">Register</Link>&nbsp;
        </nav>
      </div>
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
      {/* <div className='container'>
        <div className='button-container'>
        <button className='button' title="Login" onClick={togglePop}> Login </button>
            {seen ? <LoginModal toggle={togglePop} /> : null}
         &nbsp;
        <button className='button' title="Login" onClick={togglePop}> Register </button>
          {seen ? <RegisterModal toggle={togglePop} /> : null}

        </div>
      </div>
      <br />
      <br />



      <Home/>
      <Search/>
     &nbsp;
     &nbsp; */}

    
    </>
    
  )
}

export default App
