import React from 'react'
import './OurFeature.css'
import Laptop from '../../Assets/images/Laptop.png'

const OurFeature = () => {
  return (
    <div className='ourfeature'>
    <div className='ourfeature01'>
        <div className='ourfeature-text'>
            <h4>OUR FEATURE</h4>
            <h3>Receive update market quickly everytime</h3>
            <p>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
            <button>Get Started</button>
        </div>
        <img src={Laptop} alt=''/>
    </div>
</div>
  )
}

export default OurFeature