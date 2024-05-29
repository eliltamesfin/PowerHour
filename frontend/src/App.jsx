import React from 'react'
import Hero from"./Components/Hero/Hero.jsx"
import Activities from './Components/Hero/Activities/Activities.jsx'
import ChooseUs from './Components/ChooseUs/ChooseUs.jsx'
import Offers from './Components/Offers/Offers.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'

const App = () => {
  return (
    <div>
    <Hero/>
    <Activities/>
    <ChooseUs/>
    <Offers/>
    <Testimonials/>
   
     </div>
  )
}

export default App
