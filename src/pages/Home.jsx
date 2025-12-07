import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import Nurture from '../components/Home/Nurture'
import EssentialAttributes from '../components/Home/EssentialAttributes'
import Lifecycle from '../components/Home/Lifecycle'
import WhySchool from '../components/Home/WhySchool'
import CallToAction from '../components/Common/CallToAction'

const Home = () => {
  return (
    <>
      <HomeHero/>
      <Nurture/>
      <EssentialAttributes/>
      <Lifecycle/>
      <WhySchool/>
      <CallToAction/>
    </>
  )
}

export default Home
