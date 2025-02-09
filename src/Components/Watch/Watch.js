import React from 'react'
import './Watch.css'

const Watch = ({image, text}) => {
  return (
    <div className='watch'>
        <img src={image} alt=''/>
        <h6>{text}</h6> 
    </div>
  )
}

export default Watch