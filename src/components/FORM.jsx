import React from 'react'
import CARD from './CARD'
import { useRef } from 'react'

const FORM = (props) => {



const nameInputRef = useRef();
const liveInputRef = useRef();
const emailInputRef = useRef();


const addUser=(event)=>{
    event.preventDefault();

    if( nameInputRef.current.value.trim().length===0 || 
        liveInputRef.current.value.trim().length===0 || 
        emailInputRef.current.value.trim().length===0)
    {
        window.confirm("Please fill valid data");
        return;
    }
    //console.log(name,live,email);

    const userInfo={
        name:nameInputRef.current.value,
        live:liveInputRef.current.value,
        email:emailInputRef.current.value
    };

    props.getUserData(userInfo);

    // setName("");
    // setLive("");
    // setEmail("");
    
    console.log(nameInputRef.current.value);
    console.log(liveInputRef.current.value);
    console.log(emailInputRef.current.value);

    nameInputRef.current.value="";
    liveInputRef.current.value="";
    emailInputRef.current.value="";
}




  return (

    <CARD>
        <h1>Registration System</h1>
         <div>
      <form onSubmit={addUser} action="">
            <div className="form-div">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' ref={nameInputRef} />
            </div>

            <div className="form-div">
                <label htmlFor="live">Live</label>
                <input type="text" id='live' ref={liveInputRef} />
            </div>

            <div className="form-div">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' ref={emailInputRef}/>
            </div>

            <button type='submit' className='btn'>Add User</button>
      </form>
    </div>
    </CARD>
   
  )
}

export default FORM
