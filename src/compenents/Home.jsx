import Search from './Search'
import styles from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <>
      <div className={styles.header}>
      {/* <img src="assets/aurora.jpeg" alt="AURORA" width="500" height="333"/> */}
      </div>
      <Search/>
    </>

   
  )
}

export default Home
