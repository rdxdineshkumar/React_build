import React, { useState } from 'react'
import './Cards.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';





function Cards({ image, content }) {


  const [loading, setLoading] = useState(false);
  const handleLoading = () => setLoading(true);

  return (

    <div className='cards'>

      <div className='cards_content'>

        <p>{`${content} Collections`}</p>

        <a href='#'>SHOP NOW</a>

      </div>

      <span className='image_container'>
        <LazyLoadImage src={image} alt={image} afterLoad={() => handleLoading(image)} className={`lazy-image${loading ? ' loaded' : ''}`} />
      </span>

    </div>

  )

}




export default Cards