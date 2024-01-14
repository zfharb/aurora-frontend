import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    // return (
    //     <div className="popup">
    //         <div className="popup-inner">
    //             <h2>Login</h2>
    //             <form onSubmit={handleLogin}>
    //                 <label>
    //                     Username:
    //                     <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    //                 </label>
    //                 <label>
    //                     Password:
    //                     <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    //                 </label>
    //                 <button type="submit">Login</button>
    //             </form>
    //             <button onClick={props.toggle}>Close</button>
    //         </div>
    //     </div>
    // )
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
            {/* <button onClick={props.toggle}>Close</button> */}

        </div>
    )
}

export default Login
