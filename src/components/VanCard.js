import React from 'react'
// import vanImage from '../media/product1.png'
import ExploreButton from './ExploreButton'
const VanCard = ({type, vanName, image}) => {
    const buttonStyle = {
      Luxury: "py-1 rounded outline-none px-3 bg-black my-2 font-semibold text-white transition",
      Simple: "py-1 rounded outline-none px-3 bg-orange-300 my-2 font-semibold text-white transition",
      Rugged: "py-1 rounded outline-none px-3 bg-green-900 my-2 font-semibold text-white transition"
    }
    const style = buttonStyle[type];
    
  return (
    <div>
        <div>
            <img src={image} alt="About Us" className='w-full rounded-md'/>
            <div className='flex justify-between my-1 items-center'>
                <h3 className='text-md font-bold'>{vanName}</h3>
                <p className=''>$80</p>
            </div>
            <ExploreButton name={type} style={style}/>
        </div>
    </div>
  )
}

export default VanCard