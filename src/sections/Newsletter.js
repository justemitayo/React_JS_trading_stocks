import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter-box'>
            <div className='newsletter-preview'>
                <div className='newsletter-text'>
                    <h4>OUR NEWSLETTER</h4>
                    <h2>Stay updated with our <br />weekly newsletter</h2>
                    <p>a collection of the hottest stock market news sent every week to<br /> your email</p>
                </div>
                <div className='newsletter-signup'>
                    <h3>Signup For Newsletter</h3>
                    <form className='newsletter-form'>
                        <input type='text' name='Email address' placeholder='Email address' className='inpuut'/>
                        <input type='password' id='password' name='password' placeholder='password'/>
                    </form>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter