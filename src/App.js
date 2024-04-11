import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Navigate, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import NotFound from './pages/NotFound'
import VanPage from './pages/VanPage'
import VanDetails from './pages/VanDetails'
import Host from './pages/Host'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import HostVan from './components/HostVan'
import Reviews from './components/Reviews'
import SignUp from './pages/SignUp'
const App = () => {
  // const currentPath = Navigate()
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Navigate  to="/" />}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/van/' element={<VanPage/>}/>
          <Route path='/van/:vanname' element={<VanDetails/>}/>
          <Route path='/host/*' element={<Host/>}/>
          <Route path='/host' element={<Navigate to="/host/dashboard"/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App