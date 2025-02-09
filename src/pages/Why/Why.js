import React from 'react'
import './Why.css'
import Header from '../../sections/Why/Header'
import Platform from '../../sections/Why/Platform'
import Benefit from '../../sections/Why/Benefit'
import Trade from '../../sections/Trade'
import Newsletter from '../../sections/Newsletter'
import Advantage from '../../sections/Why/Advantage'

const Why = () => {
  return (
    <>
     <Header />
     <Platform /> 
     <Benefit />
     <Advantage />
     <Trade className ='trader' />
     <Newsletter />  
    </>
  )
}

export default Why