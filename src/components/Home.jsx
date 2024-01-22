
import goldCoast from '../images/gold-coast.avif'
import dubai from '../images/burj-khalifa.webp'
import newYork from '../images/nyc-street.webp' 


function Home() {

  return (
    <>
      <div class="container-fluid no-padding px-0 ">

      <img src={goldCoast} class="img-fluid w-100" alt="AuStralia Gold Coast"/>
      
      </div>


      <div class="container-fluid no-padding px-0 ">
      <img src={dubai} class="img-fluid w-100" alt="AuStralia Gold Coast"/>
        
        
      </div>

      <div class="container-fluid no-padding px-0 ">
      <img src={newYork} class="img-fluid w-100" alt="New York"/>
        
        
      </div>
    </>
  )
}

export default Home
