import React from 'react'
import "./Slide.scss"
import { Slider } from 'infinite-react-carousel';

// import CategoryCard from '../CategoryCard/CategoryCard';

const Slide = ({children,arrowsScroll,slidesToShow}) => {
return (
<div className='slide'>
  <div className="container">
    <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
     
      {children}
    </Slider>
  </div>
</div>
)
}

export default Slide