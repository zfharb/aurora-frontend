import Header from './Header'
import { useState } from 'react'

import "./Register.css"


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async () => {
        var targetUrl ='https://j7gerpuqm8.execute-api.us-east-1.amazonaws.com/dev/register'
        const res= await fetch(targetUrl,{
                mode:  'no-cors' ,
                method: 'POST',
                headers: {
                        'Content-Type': "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                        "name":name,
                        "email":email,
                        "username":username,
                        "password":password
                })
        })
        .then(response => console.log(typeof response))
        .catch(error =>{
                console.log(error)
            })
    }

    return (
        <>
        <section  class='register-bg-image'> 
        <div class="container d-flex justify-content-center min-vh-100 align-items-center">
                <form>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">username</label>
                    <input type="username" class="form-control" id="exampleInputPassword1" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                    </div>
                
                    <button type="submit" class="btn btn-primary" onClick={registerUser}>Register</button>

                </form>   
        </div>
        </section>

        </>
    
    )
}

export default Register