import React from 'react'
import './Heading.css'
import Task from '../../Components/Indo/Task'

const Lower = ({posts, handleClick}) => {
    const topHead = posts.slice(4, 9);

    return (
      <div className='heading'>
        <div className='heading-component'>
          <div className='heading-head'>
            <h3>Recent News</h3>
            <button>See all</button>
          </div>
          <div className='heading-wallet'>{topHead.map((dt, index) => <Task dt={dt} handleClick={handleClick} key={index}/> )}</div>
        </div>
      </div>
    )
}

export default Lower