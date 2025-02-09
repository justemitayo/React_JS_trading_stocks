import React from 'react'
import './Material.css'
import Mat from '../../Components/Mat/Mat'

const Material = () => {
    const data = [
        {
            text: "What is the stock market?",
            image: require("../../Assets/images/Forex1.png"),
            button: "See E-Book"
        },
        {
            text: "How does the stock market work?",
            image: require("../../Assets/images/Forex2.png"),
            button: "See E-Book"
        },
        {
            text: "Important glossary in the world of stocks",
            image: require("../../Assets/images/Forex3.png"),
            button: "See E-Book"    
        }
    ]
    
  return (
    <div className='material'>
        <h3>Learning Materials Journey</h3>
        <p>Get learning and experience on how to invest in stocks structured by experts with electronic guidebooks.</p>
        <div className='material-wallet'>{data.map((dt, index) => <Mat {...dt} key={index}/> )}</div>
        <button>See More E-Book</button>
    </div>
  )
}

export default Material