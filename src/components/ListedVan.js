import React from 'react'

const ListedVan = ({dashboardStyle, vanStyle}) => {
  return (
    <>
        <div className='flex  justify-between items-center px-3 py-4'>
            <p className={dashboardStyle || vanStyle}>Your listed van</p>
            <p>See more</p>
        </div>
    </>
  )
}

export default ListedVan