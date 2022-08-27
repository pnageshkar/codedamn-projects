import React from 'react'

import Footer from '../components/Footer';
import Features from '../components/Features';

import Hero from '../components/Hero';



const home = () => {
  return (
    <div className ="overflow-x-hidden h-full ">
        <Hero/>
        <Features />
        <Footer/>
    </div>
  )
}

export default home