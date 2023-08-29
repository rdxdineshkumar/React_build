import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Card.css'
function Card({data,classtitle}) {
  const [loading, setLoading] = useState([]);
  const handleLoading =(id)=> setLoading((prev)=>[...prev, id]);
  return (
    <div>
        <div className='products'>
      {
        data.map(product => (
            <Link className={classtitle}  to={`/productDetails/${product.id}`} key={product.id}>
              <span className='image_container'>
                <LazyLoadImage src={product.image} alt={product.title} id={product.id} placeholderSrc='../img/blur-image.png' afterLoad={()=>handleLoading(product.id)} className={`lazy-image${loading.includes(product.id) ? ' loaded' : ''}` }/>
              </span>
              <h4> {product.title}</h4>
              <p>${product.price}</p>
            </Link>
        ))
      }
    </div>
    </div>
  )
}

export default Card
