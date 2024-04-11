import React from 'react'
import ListedVan from './ListedVan'
import EachListedVan from './EachListedVan'
import product1 from '../media/product1.png'
import product2 from '../media/product2.png'
import product3 from '../media/product3.png'
import product4 from '../media/product4.png'
import product5 from '../media/product5.png'

const Dashboard = () => {
  return (
    <>
        <div className='px-3 bg-orange-200 py-2'>
            <h1 className='w-full px-0 pt-2'>Welcome!</h1>
            <p className='py-4'>Income in last <span>30 days</span></p>
            <p className='text-3xl font-bold'>$2,000</p>
        </div>
        <div className='bg-orange-300 px-3 py-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <h3 className='text-2xl font-bold'>Reveiw Score</h3>
                <div className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-700 mt-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <div className='mt-1'>
                        <span className='font-semibold'>5.0</span>
                        <span>/5</span>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-medium'>Details</p>
            </div>
        </div>
        <ListedVan dashboardStyle="text-lg font-semibold static"/>
        <EachListedVan name="Modern Explorer" price="$60/day" image={product1}/>
        <EachListedVan name="Beach Bum" price="$80/day" image={product2}/>
        <EachListedVan name="Modern Explorer" price="$60" image={product3}/>
        <EachListedVan name="Modern Explorer" price="$60" image={product4}/>
        <EachListedVan name="Modern Explorer" price="$60" image={product5}/>
    </>
  )
}

export default Dashboard