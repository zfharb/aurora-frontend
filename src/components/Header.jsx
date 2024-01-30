import "./Header.css"
import { useState, useEffect} from 'react'


function Header() {

  const [navShadow, setNavShadow] = useState('');
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          setNavShadow('navbar-scrolled');
        } else  if (window.scrollY < 100) {
          setNavShadow('');

        }
    });
}, [])
 
    return (
      <>
       
      <nav class={`navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ${navShadow}`}>
      <div class="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <a class="navbar-brand text-white fs-1" href="#">MadinaX</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

{/* //remove code */}
      <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/home">Home</a></li>
        {/* <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li> */}
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/Register"><span class="glyphicon glyphicon-user"></span> Register</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  

{/* //remove code */}


        {/* <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/ImageUpLoad">my pictures</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/Register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/Login">Login</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
    </>
    )
  }
  
  export default Header
  