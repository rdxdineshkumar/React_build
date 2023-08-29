import React, { useState } from 'react'
import './Banner.css'
import watch from '../../../Images/img1.png'
import speaker from '../../../Images/img2.png'
import mobile from '../../../Images/img3.png'
import { Link } from 'react-router-dom'

const bannerImages=[
  {
    id: 1,
    img: watch,
    navigateTo: '/watch'
  },
    {
    id: 2,
    img: speaker,
    navigateTo: '/accessories'
  },
    {
    id: 3,
    img: mobile,
    navigateTo: '/phones'
  },
    {
    id: 4,
    img: watch,
    navigateTo: '/watch'
  },
    {
    id: 5,
    img: speaker,
    navigateTo: '/accessories'
  },
    {
    id: 6,
    img: mobile,
    navigateTo: '/phones'
  },

]

function Banner() {
  const [loading, setLoading] = useState([]);
  const handleLoading =(id)=> setLoading((prev)=>[...prev, id]);

  return (
    <div className='slider'>
        <div className={`slider_images ${loading.length != 6 ? 'loading_images': ''}`}> 
          {bannerImages.map(item=>
              <Link to={item.navigateTo} key={item.id}>      
                <img src={item.img} alt={item.id} onLoad={()=>handleLoading(item.id)} className={`lazy-image${loading.length ===6 ? ' loaded' : ''}`}/>
            </Link>
            )}
        </div>
    </div>
  )
}

export default Banner
