import Register from './Register'


function Header() {

    return (
      <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand text-black fs-1" href="#">MadinaX</a>
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
              <a class="nav-link text-black" href="Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="Register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="Login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  
      </>
    )
  }
  
  export default Header
  