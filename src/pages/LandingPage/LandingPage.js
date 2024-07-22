import React from 'react'
import Desktop4 from '../../sections/LandingPage/Desktop4'
import LandingSection from '../../sections/LandingPage/LandingSection'
import Sponsor from '../../sections/LandingPage/Sponsor'
import Feature from '../../sections/LandingPage/Feature'
import Newsletter from '../../sections/Newsletter'
import OurFeature from '../../sections/LandingPage/OurFeature'

const LandingPage = () => {
  return (
    <>
    <LandingSection />
    <Sponsor />
    <Desktop4 />
    <Feature />
    <OurFeature />
    <Newsletter />
    </>
  )
}

export default LandingPage