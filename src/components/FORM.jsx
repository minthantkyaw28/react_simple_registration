import React from 'react'
import CARD from './CARD'
import { useState } from 'react'

const FORM = (props) => {

const[name,setName]=useState("");
const[live,setLive]=useState("");
const[email,setEmail]=useState("");

const addUser=(event)=>{
    event.preventDefault();

    if( name.trim().length===0 || 
        live.trim().length===0 || 
        email.trim().length===0)
    {
        window.confirm("Please fill valid data");
        return;
    }
    //console.log(name,live,email);

    const userInfo={
        name,
        live,
        email
    };

    props.getUserData(userInfo);

    setName("");
    setLive("");
    setEmail("");
}




  return (

    <CARD>
        <h1>Registration System</h1>
         <div>
      <form onSubmit={addUser} action="">
            <div className="form-div">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={name} onChange={(event)=>{setName(event.target.value)}} />
            </div>

            <div className="form-div">
                <label htmlFor="live">Live</label>
                <input type="text" id='live' value={live} onChange={(event)=>{setLive(event.target.value)}} />
            </div>

            <div className="form-div">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            </div>

            <button type='submit' className='btn'>Add User</button>
      </form>
    </div>
    </CARD>
   
  )
}

export default FORM
