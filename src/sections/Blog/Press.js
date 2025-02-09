import React from 'react';
import './Update.css';
import Indo from '../../Components/Indo/Indo';

const Press = ({posts, handleClick}) => {

  const topData = posts.slice(9, 12)

  return (
    <div className='update'>
        <div className='update-component'>
            <div className='update-head'>
                <h4>Press Release</h4>
                <button>See All</button>
            </div>
            <div className='update-wallet'>{topData.map((dt, index) => <Indo dt={dt} handleClick={handleClick} key={index} />)}</div>
        </div>
    </div>
  )
}

export default Press