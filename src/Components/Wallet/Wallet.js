import React from 'react';
import './Wallet.css'

const Wallet = ({image, text, sub_text}) => {
  return (
    <div className='wallet'>
        <img src={image} alt='' />
        <h4>{text}</h4>
        <p>{sub_text}</p>
    </div>
  )
}

export default Wallet