import React from 'react'
import bgImage from '../media/image2.png'
const AboutSectionOne = () => {
  return (
    <>
        <img src={bgImage} alt="About Us" className='w-full'/>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='description'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
        <p className='description'> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    </>
  )
}

export default AboutSectionOne