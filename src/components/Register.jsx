import { useState } from 'react'
import axios from "axios";
import ocean from '/src/images/ocean.jpeg'


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (event) => {
        console.log("register event--------")
        console.log(event)
        console.log("register event--------")

        event.preventDefault();

        await axios
        .post(
                "https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/register",
                {
                        name:name,
                        email:email,
                        username:username,
                        password:password
                }
        )
        .then((response) => {
                console.log("Successfully registered user!")
                console.log(response);
                setName('')
                setEmail('')
                setUsername('')
                setPassword('')

        })
        .catch((error) => {
                console.log("Something went wrong!")
                console.log(error);
                setName('')
                setEmail('')
                setUsername('')
                setPassword('')
        });

    }

    return (
        <>
      <div class="container-flex w-100 h-100 position-absolute">

        <img class="z-n1 w-100 h-100 position-absolute"
                src={ocean} 
                style={{  
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                 alt="...."/> 
        <div class="z-0  position-absolute top-50 start-50 translate-middle">
                <form class=" w-100 p-3 form-bg">

                    <div class="mb-3">
                    <label htmlFor="registerFormName" class="form-label"><h4>name</h4></label>
                    <input type="name" class="form-control" id="registerFormName" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label htmlFor="registerFormEmail" class="form-label"><h4>email</h4></label>
                    <input type="email" class="form-control" id="registerFormEmail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label htmlFor="registerFormUsername" class="form-label"><h4>username</h4></label>
                    <input type="username" class="form-control" id="registerFormUsername" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label htmlFor="registerFormPassword" class="form-label"><h4>Password</h4></label>
                    <input type="password" class="form-control" id="registerFormPassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                
                    <button type="submit" class="btn btn-primary" onClick={registerUser}>Register</button>

                </form>   
        </div>
        </div>

        </>
    
    )
}

export default Register