import React from 'react'
import "./Testimonials.css"
import  {testimonialData} from   "../../Data/testimonialData.js"

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className='left-t'>
        
        <span className='stroke-text'>What our</span>
        <span> personal service clients</span>
        <span> have to say</span>
        
        <span>{testimonialData[0].review}</span>
        
        </div> 
      <div className='right-t'></div> 
    </div>
  )
}

export default Testimonials