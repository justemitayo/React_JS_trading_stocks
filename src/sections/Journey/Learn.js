import React from 'react'
import './Smart.css'
import Watch from '../../Components/Watch/Watch'

const Learn = () => {
    const data =[
        {
            text: "Understanding Forex Trading Concepts (for Beginners)",
            image: require("../../Assets/images/Lap1.png")
        },
        {
            text: "The Ultimate Technical Analysis Trading Course (For Beginners)",
            image: require("../../Assets/images/lap2.png")
        },
        {
            text: "Support and Resistance Secrets: Powerful Strategies to Profit in Bull",
            image: require("../../Assets/images/Lap3.png")
        }
    ]
  return (
    <div className='smart'>
        <h3>Learn with Us</h3>
        <p>Develop and improve your knowledge of skills about the world of stocks to achieve maximum profit</p>
        <div className='smart-wallet'>{data.map((dt, index) => <Watch {...dt} key={index}/>)}</div>
        <button>See more Videos</button>
    </div>
  )
}

export default Learn