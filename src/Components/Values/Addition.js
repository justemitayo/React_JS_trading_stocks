import React from 'react'
import './Addition.css'

const Addition = ({image, text, sub_text}) => {
  return (
    <div className='addition'>
        <img src={image} alt='' />
        <h4>{text}</h4>
        <p>{sub_text}</p>
    </div>
  )
}

export default Addition