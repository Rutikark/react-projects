import React, {useState}from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
        }
        catch(e){
            console.log(e)
        }
    }
  return (
    <div className='login'>
       <h1>Login</h1>
       <form action="POST">
        <input type="email" onChange ={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
        <input type="submit" />
       </form>
       <br />
       <p>or</p>
       <br />
       <Link to="/signup">Signup Page</Link>
    </div>
  )
}
