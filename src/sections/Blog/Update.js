import React from 'react';
import './Update.css';
import Indo from '../../Components/Indo/Indo';

const Update = ({posts}) => {

  const topData = posts?.slice(0, 3);

  return (
    <div className='update'>
        <div className='update-component'>
            <div className='update-head'>
                <h4>Newest Update</h4>
                <button>See All</button>
            </div>
            <div className='update-wallet'>{topData.map((dt, index) => <Indo dt={dt} key={index} />)}</div>
        </div>
    </div>
  ) 
}

export default Update