import React from 'react'
// import Tame from '../../Components/Indo/Tame';
import '../../Components/Indo/Tame.css'
import Dev from '../../Assets/images/Dev.png';


const Discuss = ({ post}) => {
  console.log("post", post)

  if (!!!post?.title) {
    return <div>Post not found</div>;
  }

  return (
    <div className='tame'>
      <h3>{post?.title}</h3>
      <p>Tuesday, 15 March 2022</p>
      <img src={Dev} alt=''/>
      <p>{post.body}</p>
    </div> 
  )
}

export default Discuss