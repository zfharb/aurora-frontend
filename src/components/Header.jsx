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
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="Register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
  }
  
  export default Header
  