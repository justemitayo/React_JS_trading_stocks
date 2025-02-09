import React from 'react';
import './Platform.css';
import Phone from '../../Assets/images/Phone.png'


const Benefit = () => {
  return (
    <div className='platform'>
    <div className='platform-component'>
        <img  src={Phone} alt=''/>
        <div className='platform-content'>
            <h6>WHY US?</h6>
            <h3><span>Additional Benefits</span> of <br />Trading at Tradiant </h3>
            <p>Every time you transact at Tradiant, you earn Tradiant Rewards points which can be exchanged for various travel, gadget, lifestyle, and automotive gifts. This program applies to all Live Standard Account customers. If trading on a Demo Account you don't get a prize, yes.</p>
            <button>Learn more</button>
        </div>
        
    </div>
</div>
  )
}

export default Benefit