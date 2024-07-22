import React, { useState } from 'react';
import './Navbar.css'
import arrow from '../../Assets/images/downArrow.png';
import logo from '../../Assets/images/Untitled 2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <div className='navbar'>
      <div className='navbar-frame'>
      <div className='frame'>
        <Link to='/'><img  className='logo' alt='arrow' src={logo}/></Link>
        <ul className='navbar-menu'>
            <Link to='/about-us'> <li>About Us</li></Link>  
            <li>Why Us?</li>  
            <li>Blog</li>
            <li>Journey
              <img src={arrow} alt='arrow'/>
            </li>
            <li>Help</li>  
          </ul>
        </div>    
          <div className='navbar-button'>
            <button className='butt1'>Sign Up</button>
            <button className='butt2'>Sign In</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar