import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css'


function Register(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>
                    first name: 
                    &nbsp;
                    <input type="password" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            <br/>
            &nbsp;
            <label className={styles.label}>
                    last name:
                    &nbsp;
                    <input type="password" value={lastName} onChange={e => setLastName(e.target.value)} />
            </label>
            <br/>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <label className={styles.label}>
                    email:
                    &nbsp;
                    <input type="password" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br/>
            &nbsp;
            <label className={styles.label}>
                    username:
                    &nbsp;
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <br/>
            &nbsp;
            <label className={styles.label}>
                    password:
                    &nbsp;
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br/>
            &nbsp;
            <button type="submit">Login</button>
            &nbsp;
            
            <button onClick={() => navigate("/")}>Close</button>

            {/* <button onClick={props.toggle}>Close</button> */}
        
        </div>
    )
}

export default Register
