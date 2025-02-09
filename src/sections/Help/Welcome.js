import React from 'react'
import './Welcome.css'
const Welcome = () => {
  return (
    <div className='welcome'>
        <div className='welcome-content'>
            <h6>Support Center</h6>
            <h2>Welcome to the Tradiant Support Center, Can I help you?</h2>
                <input 
                type='text'
                id='search'
                name='query'
                className='search-input'
                placeholder='Enter the topic you want to search for...'/>
        </div>
    </div>
  )
}

export default Welcome