import React from 'react'
import './Vision.css'
import Glass from '../../Assets/images/Glass.png'
import Arrow from '../../Assets/images/Arrow.png'

const Mission = () => {
  return (
    <div className='vision'>
        <div className='vision-component'>
            <div className='vision-content'>
                <h3>Our Mission</h3>
                <p>Providing excellent service from risk placement to settlement of compensation in the interest of obtaining the best capital market results. Maintain the profitability of each user with the aim of meeting the expectations of each user</p>
                <button>
                  <h5>See More</h5>
                  <img src={Arrow} alt='' className='arrow'/>
                </button>
            </div>
            <img src={Glass} alt='pic' className='meeting'/>
        </div>
    </div>
  )
}

export default Mission