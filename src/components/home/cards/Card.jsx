import React from 'react'
import {Link} from 'react-router-dom'
function Card({data,classtitle}) {
  return (
    <div>
        <div className='products'>
      {
        data.map(product => (
            <Link className={classtitle}  to={`/productDetails/${product.id}`} key={product.id}>
              <img src={product.image} alt={product.title} />
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
