import React from 'react'
import './Banner.css'
import watch from '../../../Images/img1.png'
import speaker from '../../../Images/img2.png'
import mobile from '../../../Images/img3.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Banner() {
  return (
    <div className='slider'>
        <div className='slider_images'>
            <Link to='/watch'><img src={watch}></img></Link>
            <Link to='/accessories'><img src={speaker}></img></Link>
            <Link to='/phones'><img src={mobile}></img></Link>
            <Link to='/watch'><img src={watch}></img></Link>
            <Link to='/accessories'><img src={speaker}></img></Link>
            <Link to='/phones'><img src={mobile}></img></Link>
        </div>
    </div>
  )
}

export default Banner
