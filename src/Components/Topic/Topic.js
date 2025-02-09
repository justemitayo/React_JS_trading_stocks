import React from 'react';
import './Topic.css'

const Topic = ({image, text}) => {
  return (
    <div className='topic'>
        <img alt='' src={image} />
        <h5>{text}</h5>
    </div>
  )
}

export default Topic