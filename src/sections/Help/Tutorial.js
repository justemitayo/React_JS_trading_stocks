import React from 'react';
import './Tutorial.css';
import Vide from '../../Components/Vide/Vide';

const Tutorial = () => {
    const data = [
        {
            text: "How to open a stock account at.            Tradiant?",
            image: require("../../Assets/images/Stock.png")
        },
        {
            text: "How to optimize analysis tools and Artificial Intelligence in Tradiant",
            image: require("../../Assets/images/Analysis.png")
        },
        {
            text: "Explanation of each free and paid feature in Tradiant",
            image: require("../../Assets/images/paid.png")
        }
    ]
  return (
    <div className='tutorial'>
        <div className='tutorial-content'>
            <h3>Video Tutorials</h3>
            <p>Learn how to use our platform by watching the following set of video tutorials.</p>
            <div className='tutorial-wallet'>{data.map((dt, index) => <Vide {...dt} key={index} />)}</div>
        </div>
    </div>
  )
}

export default Tutorial