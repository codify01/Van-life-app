import axios from 'axios'
import React, { useEffect } from 'react'
let endpoint = "http://localhost:5000/admin/host"


// const getData = ()=>{
//   axios.get(endpoint)
//   .then((response)=>{
//     console.log(response);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }


const Host = () => {
  return (
    <>
        <div className='p-3'>
          <input type="text" placeholder='Van name' className='w-full'></input>
          <select>
            <option></option>
            <option>Simple</option>
            <option>Luxury</option>
            <option>Rugged</option>
          </select>
          <input type='text' placeholder='Description' className='w-full'></input>
          <input type='text' placeholder='Price per hour' className='w-full'></input>
          <input type='file' placeholder='Upload the van image' className='w-full'></input>
        </div>
        <button className='btn bg-black text-white px-3 mx-center hover:bg-black/90'>Get Host</button>
    </>
  )
}

export default Host