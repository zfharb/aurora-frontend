import { useState } from 'react'
import axios from "axios";
import burningMan from '/src/images/burning-man-1.jpeg'


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
        <div class="container-flex w-100 h-100 ">
        <img class="z-n1 w-100 h-100 position-absolute"
                src={burningMan} 
                style={{  
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                 alt="...."
        /> 
        <div class="z-0  position-absolute top-50 start-50 translate-middle">
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
        </div>
        </>
    )
}

export default Login
