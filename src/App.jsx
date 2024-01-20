import Home from './compenents/Home'
import Login from './compenents/Login'
import Register from './compenents/Register'
import NotFound from './compenents/NotFound'
import {Link, Route, Routes} from "react-router-dom"


// import styles from './App.module.css'

function App() {
  return (
    //  <section className={styles.section}>
    <>
      {/* <img src="../src/images/glass-pebbles.jpeg" className="img-fluid" alt="..."/> */}

      <div className="d-flex align-items-center justify-content-center opacity-50 sticky-top">  
        <Link to="/">Home</Link>&nbsp;
        <Link to="/login">Login</Link>&nbsp;
        <Link to="/register">Register</Link>&nbsp;
      </div>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>   

    </>
    // </section> 
  
  )
}

export default App
