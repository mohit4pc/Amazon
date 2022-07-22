import React from 'react'
import Detail from '../Components/Detail';
import Glass from '../Components/Glass'
import HeroSection from '../Components/HeroSection'
import Products from '../Components/Products';
import Products2 from '../Components/Products2';
import ServicesItem from '../Components/ServicesItem'
import Team from '../Components/Team';

function Home() {
  return (
    <>
    <HeroSection />
    <Products />
    <ServicesItem />
    <Glass />
    <Products2/>
    <Team />
    <Detail />
    </>
    
  )
}

export default Home