import React from 'react'
import Vanexplore from '../components/Vanexplore'
import VanCard from '../components/VanCard'
import vanImage from '../media/product1.png'
import vanImage2 from '../media/product2.png'
import vanImage3 from '../media/product3.png'
import vanImage4 from '../media/product4.png'
import vanImage5 from '../media/product5.png'
import vanImage6 from '../media/product6.png'
import { Link} from 'react-router-dom'

const VanPage = () => {

  return (
    <div className='p-3'>
        <Vanexplore/>
        <div className='grid grid-cols-2 gap-3'>
            <Link to={`/van/Modern Explorer`}><VanCard type="Simple" vanName="Modern Explorer"  image={vanImage} /></Link>
            <Link to="Beach Bum"><VanCard type="Luxury" vanName="Beach Bum"  image={vanImage2} /></Link>
            <Link to="Reliable Red"><VanCard type="Rugged" vanName="Reliable Red"  image={vanImage3} /></Link>
            <Link to="Dreamfinder"><VanCard type="Simple" vanName="Dreamfinder"  image={vanImage4} /></Link>
            <Link to="The Cruise"><VanCard type="Luxury" vanName="The Cruise"  image={vanImage5} /></Link>
            <Link to="Green Wonder"><VanCard type="Rugged" vanName="Green Wonder"  image={vanImage6} /></Link> 
        </div>
    </div>
  )
}

export default VanPage