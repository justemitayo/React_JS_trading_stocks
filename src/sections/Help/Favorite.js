import React from 'react'
import './Favorite.css';
import Topic from '../../Components/Topic/Topic';

const Favorite = () => {
    const data =[
        {
            text: "About Tradiant",
            image: require('../../Assets/images/Time.png')
        },
        {
            text: "Beginner's Guide",
            image: require('../../Assets/images/Guide.png')
        },
        {
            text: "Account Opening",
            image: require('../../Assets/images/People.png')
        },
        {
            text: "Trading Education",
            image: require('../../Assets/images/Educate.png')
        },
        {
            text: "Trading Tools",
            image: require('../../Assets/images/Tools.png')
        },
        {
            text: "Special Promotion",
            image: require('../../Assets/images/Rank.png')
        },
        {
            text: "General Trading",
            image: require('../../Assets/images/Lines.png')
        },
        {
            text: "Download Platform",
            image: require('../../Assets/images/Download.png')
        },
    ]
  return (
    <div className='favorite'>
        <div className='favorite-content'>
            <h3>Favorite Help Topic</h3>
            <div className='favorite-wallet'>{data.map((dt, index) => <Topic {...dt} key={index} />)}</div>
        </div>
    </div>
  )
}

export default Favorite