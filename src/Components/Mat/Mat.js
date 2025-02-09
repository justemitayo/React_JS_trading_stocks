import React from 'react'
import './Mat.css'

const Mat = ({text, image, button}) => {
  return (
    <div className='mat'>
        <img src={image} alt=''/>
        <h6>{text}</h6> 
        <button>{button}</button>
    </div>
  )
}

export default Mat