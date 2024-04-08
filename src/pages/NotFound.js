import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className='text-center py-16'>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'><button className='btn mt-5 bg-black text-white w-[90%]'>Return to home</button></Link>
        </div>
    </>
  )
}

export default NotFound