import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css'


function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData] = useState([]);


    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

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
        //     setUserData(['res']);
    }

    return (
       
        <section className={styles.section}>
                <div>

                        <label className={styles.label}>
                                name: 
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <input type="text" onChange={e => setName(e.target.value)} />
                        </label>
                </div>
                <div>
                        <label className={styles.label}>
                                email:
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <input type="text" onChange={e => setEmail(e.target.value)} />
                        </label>
                </div>           
                <div>
                        <label className={styles.label}>
                                username:
                                &nbsp;
                                <input type="text" onChange={e => setUsername(e.target.value)} />
                        </label>
                </div>
                <div>
                        <label className={styles.label}>
                                password:
                                &nbsp;
                                <input type="text" onChange={e => setPassword(e.target.value)} />
                        </label>
                </div>
                <div>
                        <button className={styles.button} type="submit"  onClick={registerUser}>register</button>
                        &nbsp;
                        <button className={styles.button} onClick={() => navigate("/")}>Close</button>

                </div>        
        </section>
        

    )
}

export default Register
