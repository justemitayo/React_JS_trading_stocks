import React from 'react';
import'./Desktop4.css'
import Wallet from '../../Components/Wallet/Wallet';

const Desktop4 = () => {
    const data = [
        {
            text: "Quick Faster",
            sub_text: "Information spreads faster with the help of the Tradiant community. With Tradiant, you will be more updated with the latest information.",
            image: require('../../Assets/images/GOTO.png')
        },
        {
            text: "Manage Your Wallets",
            sub_text: "Make your finances easier and safer with Tradiant and make every transaction more secure and quality.",
            image: require('../../Assets/images/CARD1.png')
        },
        {
            text: "Update Your Statistics",
            sub_text: "Update your general stats faster with direct notifications from Tradiant and make your next transaction more quality.",
            image: require('../../Assets/images/CARD2.png')
        }
    ]

  return (
    <div className='stock'>
    <div className='stock-market'>
        <div className='stock-market01'>
            <h4>Why Choose Tradiant?</h4>
            <h3>Specially designed for stock market</h3>
        </div>

        <div className='stock-market02'>
            {data.map((dt, index) => <Wallet {...dt} key={index} />)}
        </div>
    </div>
    </div>
  )
}

export default Desktop4