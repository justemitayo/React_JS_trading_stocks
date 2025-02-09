import React from 'react';
import './Program.css'
import women from '../../Assets/images/women.png'

const Program = () => {
  return (
    <div className='program'>
        <div className='program-content'>
            <h6>Learn with Tradiant</h6>
            <h2><span>GOFX Tradiant </span>Trading Class Program</h2>
            <p>We present this program for you, in order to prepare your skills, mentality, and technical knowledge well before starting trading.</p>
            <button>Start Journey</button>
        </div>
        <img  src={women} alt='' style={{width:'39rem', height:'28rem', marginRight:'5rem'}}/>
    </div>
  )
}

export default Program