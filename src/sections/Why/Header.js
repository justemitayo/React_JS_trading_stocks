import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <h2><span>Easy Transaction</span> With Tradiant</h2>
            <p>Confused about what to trade? When trading at Tradiant, you can use analytical tools from various well-known providers to get price movement reports, the latest market news, and other important information you need when trading.</p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header