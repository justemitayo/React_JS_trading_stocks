import React from 'react'
import './Heading.css'
import Task from '../../Components/Indo/Task'

const Heading = ({posts}) => {

  const topHead = posts.slice(0, 4);
  return (
    <div className='heading'>
      <div className='heading-component'>
        <div className='heading-head'>
          <h3>Top News</h3>
          <button>See all</button>
        </div>
        <div className='heading-wallet'>{topHead.map((dt, index) => <Task dt={dt} key={index}/> )}</div>
      </div>
    </div>
  )
}

export default Heading