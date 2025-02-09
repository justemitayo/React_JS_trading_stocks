import React from 'react';
import './Vision.css'
import Meeting from '../../Assets/images/Meeting.png'
import Arrow from '../../Assets/images/Arrow.png'



const Vision = () => {
  return (
    <div className='vision'>
        <div className='vision-component'>
          <img src={Meeting} alt='meeting' className='meeting'/>
          <div className='vision-content'>
            <h3>Our Vision</h3>
            <p>Our vision is to become a trusted advisor, intermediary, and partner to assist customers in determining financial strategies in the capital market and Become a professional reinsurance broker with a global reputation</p>
            <button>
              <h5>See More</h5>
              <img src={Arrow} alt='' className='arrow'/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Vision