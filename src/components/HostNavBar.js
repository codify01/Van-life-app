import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const HostNavBar = ({style}) => {
    const location = useLocation()
    const isDashboard = location.pathname === "/host/dashboard"
    const isIncome = location.pathname === "/host/income"
    const isVans = location.pathname === "/host/vans"
    const isReveiws = location.pathname === "/host/reviews"
  return (
    <>
        <div className= {`bg-white py-5 px-3 sticky top-0`}>
        
            <ul className='flex gap-4'>
                <Link to="/host/dashboard">
                    <li className={isDashboard?`font-bold underline underline-offset-4`:null}>Dashboard</li>    
                </Link>
                <Link to="/host/income">
                <li className={isIncome?`font-bold underline underline-offset-4`:null}>Income</li>

                </Link>
                <Link to="/host/vans">
                <li className={isVans?`font-bold underline underline-offset-4`:null}>Vans</li>

                </Link>
                <Link to="/host/reviews">
                <li className={isReveiws?`font-bold underline underline-offset-4`:null}>Reviews</li>

                </Link>
            </ul>
        </div>
    </>
  )
}

export default HostNavBar