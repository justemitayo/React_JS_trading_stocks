import React from 'react'
import './Footer.css'
import Logo from '../../Assets/images/Untitled 2.png';
import Google from '../../Assets/images/Google.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
        <div className='footer-component'>
          <div className='footer-logo'>
            <img  src={Logo} alt='' className='logo'/>
            <p>Maximize your investment in the capital market world with the convenience and various features provided by Tradiant.</p>
            <p>Unduh Aplikasi</p>
            <img className='google' src={Google} alt=''/>
          </div>
          <div className='footer-companies'>
            <h6>Companies</h6>
            <p>About Us</p>
            <p>Journey</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Help</p>
          </div>
          <div className='footer-resources'>
            <h6>Resources</h6>
            <p>About Us</p>
            <p>Journey</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Help</p>
          </div>
          <div className='footer-help'>
            <h6>Help</h6>
            <p>House Rules</p>
            <p>Our Terms</p>
            <p>Privacy & Policy</p>
          </div>
          <div className='footer-contact'>
            <h6>Contact Us</h6>
            <p>(480) 555-0103</p>
            <p>6391 Elgin St.Celina, Delaware 10299</p>
            <p>hub@tradiant.com</p>
          </div>
        </div>
      </div>
      <div className='footer-copy'>
        <p>Copyright @Tradiant 2022. All Rights Reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer