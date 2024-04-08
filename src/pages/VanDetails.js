import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../media/logo.png'
const VanDetails = () => {
  let {vanname} = useParams()
  return (
    <>
        <div className='text-center py-16'>
            <img src={logo} alt='logo' className='w-[50%] mx-auto'/>
            <h1>{vanname} details coming soon...</h1>
            <Link to='/van'><button className='btn mt-5 bg-orange-500 text-white w-[90%]'>Return to Vans</button></Link>
        </div>
    </>
  )
}

export default VanDetails