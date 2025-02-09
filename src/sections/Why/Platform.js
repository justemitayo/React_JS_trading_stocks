import React from 'react';
import './Platform.css';
import Laptop from '../../Assets/images/Laptop.png'

const Platform = () => {
  return (
    <div className='platform'>
        <div className='platform-component'>
            <div className='platform-content'>
                <h6>WHY US?</h6>
                <h3>A <span> Friendly Platform</span> <br /> for Beginner Traders </h3>
                <p>Many people want to trade forex, but have a hard time understanding the basics and how to trade forex. Therefore, Tradiant presents an online-based interactive educational platform to help you learn to trade. The educational content is made light and concise so that a novice trader can learn to trade from scratch in 1 hour.</p>
                <button>Learn more</button>
            </div>
            <img  src={Laptop} alt=''/>
        </div>
    </div>
  )
}

export default Platform