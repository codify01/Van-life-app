import React from 'react'
import ExploreButton from './ExploreButton'

const Vanexplore = () => {
  return (
    <div>
        <h1 className='px-0 w-full'>Explore our van options</h1>
        <div className='flex justify-between my-3'>
            <ExploreButton name="Simple" style="py-1 rounded outline-none px-3 bg-orange-300 font-semibold text-gray-700 hover:bg-orange-500 hover:text-white transition"/>
            <ExploreButton name="Luxury" style="py-1 rounded outline-none px-3 bg-orange-300 font-semibold text-gray-700 hover:bg-black hover:text-white transition"/>
            <ExploreButton name="Rugged" style="py-1 rounded outline-none px-3 bg-orange-300 font-semibold text-gray-700 hover:bg-green-900 hover:text-white transition"/>
            <ExploreButton name="Clear filters" style="font-semibold underline text-gray-700 outline-none"/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Vanexplore