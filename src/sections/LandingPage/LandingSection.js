import React from 'react';
import './LandingSection.css'
import support from '../../Assets/images/Untitled.png'
import Dashboard from   '../../Assets/images/Dashboard.png'

const LandingSection = () => {
  return (
    <div className='landing-top'>
      <div classname='Landing-top01'>
        <div className='landing-top02'>
          <h4>Smart Investation</h4>
          <h1>Invest Your Money With Us <br /> and <span>Get Amazing Profits</span></h1>
          <p>Maximize your investment in the capital market world with the <br/>convenience and various features provided by Tradiant.</p>
          <div className='landing-top03'>
            <button className='button1'>Get Started</button>
            <button className='button2'>See How it Works</button>
          </div>
          <p>Registered and supervised by:</p>
          <img className='support' alt='logo' src={support}/>
        </div>
        <img className='dashboard' alt='logo' src={Dashboard}/>
      </div>  
    </div>
  )
}

export default LandingSection