import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from  'axios'

function Signup() {
    const [user_name,setUsername]= useState('')
    const [pwd,setPassword]= useState('')

    async function loginHandler(e){
        e.preventDefault()

        try {
        // check if already exist otherwise do below code

            axios.post("http://localhost:5000/add",{
                user_name,pwd
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='Login'>
            <h1>Signup</h1>
            <form action="POST">
                <div>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="uname" placeholder='Username'/> <br /><br />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  name="pwd" placeholder='Password' /> <br /><br />
                    <button onClick={loginHandler}>Sumbit</button>
                </div>  
            </form>
        </div>
    )
}

export default Signup