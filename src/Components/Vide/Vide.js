import React from 'react'
import './Vide.css'

const Vide = ({text, image}) => {
  return (
    <div className='vide'>
        <img alt='' src={image}/>
        <h6>{text}</h6>
    </div>
  )
}

export default Vide