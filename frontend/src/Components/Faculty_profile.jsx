import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from  'axios'

const Faculty_profile = () => {

    const [user_name,setUsername]= useState('')
    const [designation,setDesignation]= useState('')
    const [location,setLocation]=useState('')
    const [salary,setSalary]=useState('')
    const [status,setStatus]=useState('true')

    const navigate =useNavigate()

    async function updateHandler(e){
        e.preventDefault()

        try {
            axios.post("http://localhost:5000/update",{
                user_name,designation,location,salary,status
            })
            
            //console.log(e)
        } catch (e) {
            console.log(e)
        }
    }


  return (
    <div className='profile'>
            <h1>Update Profile</h1>
            <form action="POST">
                <div>
                    <label>Username:  </label>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="uname" placeholder='Username'/> <br /><br />
                    <label>Designation:  </label>
                    <input type="text" onChange={(e)=>{setDesignation(e.target.value)}}  name="designation" placeholder='Designation' /> <br /><br />
                    <label>Location:  </label>
                    <input type="text" onChange={(e)=>{setLocation(e.target.value)}}  name="location" placeholder='Location' /> <br /><br />
                    <label>Salary:  </label>
                    <input type="number" onChange={(e)=>{setSalary(e.target.value)}}  name="salary" placeholder='Salary' /> <br /><br />
                    <button type="submit" onClick={updateHandler}>Update Profile</button>
                </div>  
            </form>

        </div>
  )
}

export default Faculty_profile