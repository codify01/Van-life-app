import React from 'react'
import bgImage from '../media/home.png'
import { Link } from 'react-router-dom'

const HomeSectionOne = () => {
  return (
    <>
        <div className='h-[50vh] bg-no-repeat bg-cover bg-center w-full mx-auto text-center' style={{backgroundImage: `url(${bgImage})`}}>
                <h1 className='text-white'>You got the travel plans, we got the travel vans.</h1>
                <p className='description text-white'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/van"><button className='btn bg-orange-400 mt-8 w-[90%] text-white'>Find your van</button></Link>
        </div>

    </>
  )
}

export default HomeSectionOne