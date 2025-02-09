import React from 'react';
import './Update.css';
import Indo from '../../Components/Indo/Indo';
import {useNavigate} from 'react-router-dom'

const Corporate = ({ posts, handleClick}) => {
    const navigate =useNavigate()

    const topData = posts.slice(3, 6)


  return (
    <div className='update'>
        <div className='update-component'>
            <div className='update-head'>
                <h4>Corporate News</h4>
                <button onClick={() => navigate(``)}>See All</button>
            </div>
            <div className='update-wallet'>{topData.map((dt, index) => <Indo dt={dt} handleClick={handleClick} key={index} />)}</div>
            {/* <div className='update-wallet'>{posts.map((data) => <Indo data={data} key={data.id} />)}</div> */}
        </div>
    </div>
  )
}

export default Corporate