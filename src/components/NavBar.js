import React from 'react'
import logo from '../media/logo.png';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation()
  const isHost = location.pathname === "/host/dashboard"
  const isHostIncome = location.pathname === "/host/income"
  const isHostReveiw = location.pathname === "/host/reviews"
  const isHostVan = location.pathname === "/host/vans"
  const isAbout = location.pathname === "/about"
  const isVans = location.pathname === "/van"
  const isSignUp = location.pathname === "/signup"

  return (
    <>
        <nav className='container mx-auto bg-white py-5 flex justify-between items-center px-4 '> 
        <Link to='/'><img src={logo} alt='logo' className='w-[30%] object-contain' /></Link>
            <ul className='flex gap-4 items-center'>
               <Link to='/host'> <li className={isHost || isHostIncome || isHostReveiw || isHostVan?`font-semibold underline underline-offset-4`:`hover:underline hover:font-semibold underline-offset-4`}>Host</li></Link>
               <Link to='/about'> <li className={isAbout?`font-semibold underline underline-offset-4`:`hover:underline hover:font-semibold underline-offset-4`}>About</li></Link>
               <Link to='/van'><li className={isVans?`font-semibold underline underline-offset-4`:`hover:underline hover:font-semibold underline-offset-4`}>Vans</li></Link>
               <Link to='/van'  className={!isSignUp?`hidden`:null}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </li>
              </Link>
            </ul>
        </nav>
    </>
  )
}

export default NavBar