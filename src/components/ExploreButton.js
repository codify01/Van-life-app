import React from 'react'

const ExploreButton = ({name, style}) => {
  return (
    <>
        <button className={style}>{name}</button>
    </>
  )
}

export default ExploreButton