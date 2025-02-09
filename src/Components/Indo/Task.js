import React from 'react'
import './Task.css';
import Dev from '../../Assets/images/Dev.png'
import {useNavigate} from 'react-router-dom'

const Task = ({dt}) => {
  const navigate = useNavigate();
   
  return (
    <div className='task'>
        <img src={Dev} alt = '' />
        <div className='word'>
          <h3>{dt.title}</h3>
          <p>
            {/* {dt.body} */}
            {/* {`${(dt.body).slice(0, 120)}...   `} */}
            {(dt.body)?.length <= 120 ? dt.body : `${(dt.body)?.slice(0, 120)}...`}
            <button onClick={() => navigate(`/blog/${dt.id}`)}>Read more</button>

          </p>
        </div>
    </div> 
  )
}
export default Task