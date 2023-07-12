import React from 'react'
import useCategory from '../../../../customhooks/useCategoryHook/useCategory'
import './CategoryCard.css'
import {Link} from 'react-router-dom'
function CategoryCard({category,title,className}) {
    const items=useCategory(category);
  return (
    <div>
        <div className='category'>
            <h3 className='category__title'>{`${title} Collections`}</h3>
            <div className={className}>
            {
                items.map((item)=>(
                    <Link className='category__items__item' key={item.id} to={`/productDetails/${item.id}`}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </Link> 
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default CategoryCard
