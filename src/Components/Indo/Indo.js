import React from 'react'
import './Indo.css';
import Arrow from '../../Assets/images/Arrow.png';
import Chess from '../../Assets/images/Chess.png'
import { useNavigate} from 'react-router-dom';

const Indo = ({ dt }) => {
  const navigate = useNavigate();
    // navigate(`/blog/${dt.id}`);
  // const detailBlog = () => {
  //   handleClick(dt.id)
  // }
  // const {userId} = useParams();

const handleClick = () => {
  if (dt?.id) {
    navigate(`/blog/${dt.id}`)
  } else {
    alert('Invalid blog id!')
  }
}

  return (
    <div className='indo'>
       <img src={Chess} alt='' style={{  width: '25rem', height: '15.3rem',
    margin: 0, position: 'relative'}}/>
       {/* <h1 style={{visibility: 'hidden'}}>{dt.id}</h1>  */}

       <div style={{
        padding: '2rem',
        marginTop: '0'
       }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            marginBottom: '0.8rem',
            marginTop: '0'
          }}>
            <p style={{color:'#90a2b2'}}>21/03/2022</p>
            <p style={{color:'#2196f3 '}}>Corporate News</p>
          </div>

          <h2 style={{fontWeight:'600', fontSize:'1.25rem', color:'#1d242a'}}>{dt.title}</h2>
          <p style={{fontSize:'0.9rem', color:'#5c7184', lineHeight:'1.25rem'}}>{dt.body}</p>
       </div>
        <div style={{display:'flex', justifyContent:'flex-end', paddingRight:'2rem', }}>
          <button onClick={() => handleClick()} style={{display:'flex', alignItems:'center', backgroundColor:'white'}}>
          {/* <button onClick={() => handleClick(dt.id)} style={{display:'flex', alignItems:'center', backgroundColor:'white'}}> */}
            <h3 style={{ color:'#2196f3'}}>Read More</h3>
              <img  src={Arrow} alt='' style={{ width:'24px', height:'24px'}}/>
          </button>
       </div>
    </div>
  )
}

export default Indo