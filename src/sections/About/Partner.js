import React from 'react'
import './Partner.css';
import flash from '../../Assets/images/flash.png';
import search from '../../Assets/images/search.png';
import Arrow from '../../Assets/images/Arrow.png';

const Partner = () => {
  return (
    <div className='partner'>
        <div className='partner-heading'>
            <div className='partner-top'>
            <h3>A trading partner you can trust</h3>
            <p>At Tradiant, we rigorously focus on quality and transparency. Our order execution quality is independently monitored. Order execution with high quality means: you save money with every investment you make with Tradiant.</p> 
            </div>
          
            <div className='partner-body'>
                <div className='partner-quality'>
                    <img alt='flash' src={flash} className='flash'/>
                    <h4>Quality execution on every trade</h4>
                    <p>Backed by multiple analyzes and precise algorithms providing quality execution decisions on every trade. Guarantee your comfort and perfection in making decisions.</p>
                    <button>View our execution scoreboard <img src={Arrow} alt='' className='yurry'/> </button>
                </div> 
                <div className='partner-quality'>
                    <img alt='search' src={search} className='flash'/>
                    <h4>Transparent & competitive pricing</h4>
                    <p>Provides transparency Pricing Emphasizes Value, not Price. As price becomes clearer to everyone in the market, each competitor's value also comes into sharper focus.</p>
                    <button>View pricing and execution advantage <img src={Arrow} alt='' className='yurry'/> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner