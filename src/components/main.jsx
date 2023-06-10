import React, { useState } from 'react'
import FORM from './FORM'
import LIST from './LIST'


const MAIN = () => {

  const[userInfo,setUserInfo]=useState([]);

  const getUserData=(userInfoObj)=>{
    console.log(userInfoObj);
    setUserInfo([...userInfo,userInfoObj]);
  }
  return (
    <section>
        <FORM getUserData={getUserData}></FORM>
        <LIST userInfo={userInfo}></LIST>
        
    </section>
  )
}

export default MAIN
