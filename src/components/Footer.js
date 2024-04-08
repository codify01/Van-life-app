import React from 'react'
const today = new Date()
const Footer = ({style}) => {
  return (
    <>
        <p className='text-center bg-neutral-700 py-3 text-neutral-200 text-md'>© {today.getFullYear()} #vanlife</p>
    </>
  )
}

export default Footer