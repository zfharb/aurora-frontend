import Header from './Header'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(e) {
    }

    return (
        <>
        <Header/>

        <div  class="container d-flex justify-content-center">
                <form align="center">
                        <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">usernmae</label>
                        <input type="name" class="form-control" id="exampleInputEmail1" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                        </div>
                        
                        <button type="submit" class="btn btn-primary" onClick={loginUser}>Login</button>
                </form>
        </div>
        </>
    )
}

export default Login