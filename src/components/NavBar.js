import React from 'react'
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
        <nav className='container mx-auto bg-white py-5 flex justify-between items-center px-4 '> 
        <Link to='/'><img src={logo} alt='logo' className='w-[30%] object-contain' /></Link>
            <ul className='flex gap-4'>
               <Link to='/host'> <li className='hover:font-semibold hover:underline hover:underline-offset-4'>Host</li></Link>
               <Link to='/about'> <li className='hover:font-semibold hover:underline hover:underline-offset-4'>About</li></Link>
               <Link to='/van'><li className='hover:font-semibold hover:underline hover:underline-offset-4'>Vans</li></Link>
            </ul>
        </nav>
    </>
  )
}

export default NavBar