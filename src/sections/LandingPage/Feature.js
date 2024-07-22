import React from 'react';
import './Feature.css';
import woman from '../../Assets/images/woman.png'

const Feature = () => {
  return (
    <div className='feature'>
        <div className='feature01'>
            <img src={woman} alt=''/>
            <div className='feature-text'>
                <h4>OUR FEATURE</h4>
                <h3>Receive update market quickly everytime</h3>
                <p>Equipped with comprehensive analysis tools and Artificial Intelligent, it makes it easier and gives you a profitable experience in the form of market updates quickly everytime, so it is not too late to make the best investment decisions.</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Feature