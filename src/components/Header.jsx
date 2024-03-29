import { useState, useEffect} from 'react'
import "./Header.css"


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
      <div class="container-fluid">
        <br/>       
        <br/>       
        <br/>    
        <br/>       
        <br/>       
        <br/>       
        <br/>       
          
        <a class="navbar-brand text-white fs-1" href="/">MadinaX</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul class="navbar-nav position-absolute top-25 end-0">
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="#">About</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="#">Blog</a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="/ImageUpLoad">my pictures</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="/Register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bolder" href="/Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
    )
  }
  
export default Header
  