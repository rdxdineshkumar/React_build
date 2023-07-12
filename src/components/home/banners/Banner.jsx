import React from 'react'
import './Banner.css'
import watch from '../../../Images/img1.png'
import speaker from '../../../Images/img2.png'
import mobile from '../../../Images/img3.png'
function Banner() {
  return (
    <div className='slider'>
        <div className='slider_images'>
            <img src={watch}></img>
            <img src={speaker}></img>
            <img src={watch}></img>
            <img src={speaker}></img>
            <img src={mobile}></img>
        </div>
    </div>
  )
}

export default Banner
