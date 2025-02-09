import React from 'react'
import './Value.css';
import Slide from '../../Components/Slide/Slide';

const Value = () => {

    const Value = [
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        },
        {
            image: require('../../Assets/images/Circle.png'),
            text: "Simplicity",
            sub_text: "We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later."
        }
    ]

  return (
    <div>
        <div className='value-slide'>
            {Value.map((vl, index) => <Slide {...vl} key={index}/>)}
        </div>
    </div>
  )
}

export default Value