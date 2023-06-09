import React from 'react'

const CARD = (props) => {
  return (
    <div className={`${props.css} bg`}>
      {props.children}
    </div>
  )
}

export default CARD
