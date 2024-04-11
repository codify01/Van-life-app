import React from 'react'
import ListedVan from './ListedVan'
import EachListedVan from './EachListedVan'
import product1 from '../media/product1.png'
import product2 from '../media/product2.png'
import product3 from '../media/product3.png'
import product4 from '../media/product4.png'
import product5 from '../media/product5.png'
const HostVan = () => {
  return (
    <>
         <ListedVan vanStyle="text-2xl font-semibold" pStyle="hidden"/>
         <EachListedVan name="Modern Explorer" price="$60/day" image={product1} hidden="hidden"/>
        <EachListedVan name="Beach Bum" price="$80/day" image={product2} hidden="hidden"/>
        <EachListedVan name="Modern Explorer" price="$60" image={product3} hidden="hidden"/>
        <EachListedVan name="Modern Explorer" price="$60" image={product4} hidden="hidden"/>
        <EachListedVan name="Modern Explorer" price="$60" image={product5} hidden="hidden"/>
    </>
  )
}

export default HostVan