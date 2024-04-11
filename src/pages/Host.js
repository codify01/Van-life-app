// import axios from 'axios'
import React from 'react'
// let endpoint = "http://localhost:5000/admin/host"
import HostNavBar from '../components/HostNavBar' 
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Income from '../components/Income'
import HostVan from '../components/HostVan'
import Reviews from '../components/Reviews'

const Host = () => {
  return (
    <>
        <HostNavBar style="sticky top-0"/>
        <Routes>
          <Route path='/dashboard'element={<Dashboard/>}/>
          <Route path='/income'element={<Income/>}/>
          <Route path='/vans'element={<HostVan/>}/>
          <Route path='/reviews'element={<Reviews/>}/>
        </Routes>
        {/* <form className='p-3' action='/user/host' method='POST'>
          <input type="text" placeholder='Van name' className='w-full mb-2 p-2'></input>
          <select className='mb-2'>
            <option>Categories</option>
            <option>Simple</option>
            <option>Luxury</option>
            <option>Rugged</option>
          </select>
          <input type='text' placeholder='Description' className='w-full mb-2 p-2'></input>
          <input type='text' placeholder='Price per hour' className='w-full mb-2 p-2'></input>
          <input type='file' placeholder='Upload the van image' className='w-full mb-2 p-2 '></input>
          <button type='submit' className='btn bg-black text-white px-3 mx-center hover:bg-black/90'>Get Host</button>
        </form> */}
    </>
  )
}

export default Host