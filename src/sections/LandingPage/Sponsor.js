import React from 'react';
import './Sponsor.css';
import sponsorLogo from '../../Assets/images/sponsorLogo.png'

const Sponsor = () => {
  return (
    <div>
        <div className='sponsor'>
          <div className='sponsor01'>
            <h4>Invest in their stock and be a part of the business</h4>
            <img   className='sponsor-logo' alt='logo' src={sponsorLogo}/>
          </div>
        </div>
    </div>
  )
}

export default Sponsor