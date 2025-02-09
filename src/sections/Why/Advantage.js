import React from 'react';
import './Advantage.css';
import Addition from '../../Components/Values/Addition';

const Advantage = () => {

    const data = [
        {
            text: "High standard",
            sub_text: "At Tradiant, we have high standards, all forms of transactions will be processed professionally, so that Tradiant users feel safe and comfortable",
            image: require('../../Assets/images/Flag.png')
        },
        {
            text: "Simplicity",
            sub_text: "We guarantee the ease of transactions at Tradiant, so that users will have convenience in transactions",
            image: require('../../Assets/images/Spiral.png')
        },
        {
            text: "Transparency",
            sub_text: "We will report all forms of transactions as they are, transparency is very important to grow the trust of Tradiant users",
            image: require('../../Assets/images/Shades.png')
        },
        {
            text: "Invention",
            sub_text:"Tradiant is the result of the production, refinement, or development of the original invention. It is also continuous and continuously developing in a better direction.",
            image: require('../../Assets/images/Security.png')
        }
    ]

  return (
    <div className='advantage'>
        <div className='advantage-component'>
            <div className='advantage-header'>
                <h3>Additional advantages from <span>Tradiant</span></h3>
                <p>At Tradiant, you will benefit from us, such as many conveniences in transactions, user-friendly transparency, and <br />many others</p>
            </div>
            <div className='advantage-content'>
                {data.map((dt, index) => <Addition {...dt} key={index} />)}
            </div>
        </div> 
    </div>
  )
}

export default Advantage