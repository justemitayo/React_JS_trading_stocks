import React from 'react';
import './Update.css';
import Indo from '../../Components/Indo/Indo';

const Publication = ({posts, handleClick}) => {

  const topData = posts.slice(6, 9)

  return (
    <div className='update'>
        <div className='update-component'>
            <div className='update-head'>
                <h4>Publications</h4>
                <button>See All</button>
            </div>
            <div className='update-wallet'>{topData.map((dt, index) => <Indo dt={dt} handleClick={handleClick} key={index} />)}</div>
        </div>
    </div>
  )
}

export default Publication