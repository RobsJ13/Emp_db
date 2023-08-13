import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from  'axios'

function Login() {

    const [user_name,setUsername]= useState('')
    const [pwd,setPassword]= useState('')

    async function loginHandler(e){
        e.preventDefault()

        try {
            axios.post("http://localhost:5000/validate",{
                user_name,pwd
            })
            //console.log(e)
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <div className='Login'>
            <h1>Login</h1>
            <form action="POST">
                <div>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="uname" placeholder='Username'/> <br /><br />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  name="pwd" placeholder='Password' /> <br /><br />
                    <button type="submit" onClick={loginHandler}>Sumbit</button>
                </div>  
            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">SignUp Page</Link>
        </div>
    )
}

export default Login