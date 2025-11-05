import React from 'react';
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
            <Link to='/why-us?'><li>Why Us?</li></Link> 
            <Link to='/blog'><li>Blog</li></Link>
            <Link to ='/journey'><li>
              Journey<img src={arrow} alt='arrow'/>
            </li></Link>
            <Link to='/help'><li>Help</li></Link> 
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