import React from 'react'

const ListedVan = ({dashboardStyle, vanStyle, pStyle}) => {
  return (
    <>
        <div className='flex  justify-between items-center px-3 py-4 bg-orange-100'>
            <p className={dashboardStyle || vanStyle}>Your listed van</p>
            <p className={pStyle}>See more</p>
        </div>
    </>
  )
}

export default ListedVan