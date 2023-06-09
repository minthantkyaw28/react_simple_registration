import React from 'react'
import CARD from './CARD'

const LIST = (props) => {
  return (
    <>

    {
        props.userInfo.length > 0 ? 
        
        (<>
            {
                props.userInfo.map(info=>{
                    return(
                        <CARD css={"card-mt"} key={info.email}>
                            <div className='list'>
                                <p>name : {info.name}</p>
                                <p>From : {info.live}</p>
                                <p>Email : {info.email}</p>
                            </div>
                        </CARD>
                    );
                })
            }
        </>) 

        : 

        (<>
            <CARD css={"card-mt"}>
                <p>Add a new user right now</p>
            </CARD>
        </>)
    }
         
    </>
  )
}

export default LIST
