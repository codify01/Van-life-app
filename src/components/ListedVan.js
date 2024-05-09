import React from 'react'
import  { Link } from "react-router-dom"
const ListedVan = ({dashboardStyle, vanStyle, pStyle, location}) => {
  return (
    <>
        <div className='flex  justify-between items-center px-3 py-4 bg-orange-100'>
            <p className={dashboardStyle || vanStyle}>Your listed van</p>
            <Link to={location}><p className={pStyle}>See more</p></Link>
        </div>
    </>
  )
}

export default ListedVan