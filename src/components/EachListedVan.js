import React from 'react'
const EachListedVan = ({name,price, image, hidden}) => {
  return (
    <>
        <div className='flex justify-between items-center mx-3 bg-white p-4 rounded-md mb-2'>
            <div className='flex gap-3 items-center '>
                <img src={image} alt='van-image' className='w-[20%] rounded'/>
                <div>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p className='text-md'>{price}</p>
                </div>
            </div>
            <div>
                <p className={hidden}>Edit</p>
            </div>
        </div>
    </>
  )
}

export default EachListedVan