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
          <Route path='/host' element={<Host/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App