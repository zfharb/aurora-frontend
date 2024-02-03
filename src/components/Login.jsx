import { useState } from 'react'
import axios from "axios";

import "./Login.css"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        console.log("login event--------")
        console.log(event)
        console.log("login event--------")

        event.preventDefault();

        await axios
        .post(
                "https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/login",
                {
                        username:username,
                        password:password
                }
        )
        .then((response) => {
                console.log("Successfully logged in user!")
                console.log(response);
                setUsername('')
                setPassword('')

        })
        .catch((error) => {
                console.log("Something went wrong!")
                console.log(error);
                setUsername('')
                setPassword('')
        });

    }

    return (
        <>  
        <section class='login-bg-image'>
            <div class="container d-flex justify-content-center align-items-center">
                    <form >
                            <div class="mb-3">
                            <label class="form-label text-white"><h4>username</h4></label>
                            <input type="username" class="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div class="mb-3">
                            <label class="form-label text-white"><h4>password</h4></label>
                            <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            
                            <button type="submit" class="btn btn-primary" onClick={loginUser}>Login</button>
                    </form>
            </div>
        </section>
        </>
    )
}

export default Login
