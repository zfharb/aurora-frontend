import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './compenents/Header'
import LoginModal from './compenents/LoginModal'
import RegisterModal from './compenents/RegisterModal'
import Search from './compenents/Search'

import './App.css'

function App() {
  const [seen, setSeen] = useState(false)

  function togglePop () {
      setSeen(!seen);
  };

  return (
    <>
      <div className='container'>
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



      <Header/>
      <Search/>
     &nbsp;
     &nbsp;

    </>
    
    
  )
}

export default App
