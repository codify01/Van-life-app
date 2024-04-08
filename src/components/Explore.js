import React from 'react'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
    <>
        <div className='bg-orange-300 w-[90%] px-6 py-4 my-6 mx-auto rounded-md'>
            <h2>Your destination is waiting. <br/> Your van is ready.</h2>
            <Link to="/van"><button className='btn mt-8 bg-black text-white px-3'>Explore our van</button></Link>
        </div>

    </>
  )
}

export default Explore