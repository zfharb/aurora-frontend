import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import './Login.css'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    return (
        <div className="popup">
            
            <label className="label">
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label className="label">
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
        
            
            <button type="submit">Login</button>
            <button onClick={() => navigate("/")}>Close</button>


        </div>
    )
}

export default Login
