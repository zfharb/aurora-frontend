import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import styles from './Login.module.css'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    return (
        <section className={styles.section}>
                <div>

                        <label className={styles.label}>
                                usernmae: 
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <input type="text" onChange={e => setUsername(e.target.value)} />
                        </label>
                </div>
                <div>
                        <label className={styles.label}>
                                password:
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <input type="text"  onChange={e => setPassword(e.target.value)} />
                        </label>
                </div>           
                
                <div>
                        <button className={styles.button} type="submit" >register</button>
                        &nbsp;
                        <button className={styles.button} onClick={() => navigate("/")}>Close</button>

                </div>        
        </section>

    )
}

export default Login
