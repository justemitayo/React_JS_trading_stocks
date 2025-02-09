import React from 'react';
import './Smart.css';
import Watch from '../../Components/Watch/Watch';

const Smart = () => {
    const data =[
        {
            text: "What is the stock market?",
            image: require("../../Assets/images/Forex1.png")
        },
        {
            text: "How does the stock market work?",
            image: require("../../Assets/images/Forex2.png")
        },
        {
            text: "Important glossary in the world of stocks",
            image: require("../../Assets/images/Forex3.png")
        }
    ]
  return (
    <div className='smart'>
        <h3>30 Second Smarter</h3>
        <p>A short 30 second video that will make you understand more about the capital market</p>
        <div className='smart-wallet'>{data.map((dt, index) => <Watch {...dt} key={index}/> )}</div>
        <button>See More Videos</button>
    </div>
  )
}

export default Smart