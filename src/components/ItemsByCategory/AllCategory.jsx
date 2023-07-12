import React from 'react'
import CategoryCard from './CategoryCard/CardsbyCategory/CategoryCard'
function AllCategory() {
  return (
    <div>
        <CategoryCard category="phone" title="phone" className='category__items'/>
        <CategoryCard category="laptop" title="laptop" className='category__items'/>
        <CategoryCard category="watch" title="watch" className='category__items'/>
        <CategoryCard category="accessories" title="accessories" className='category__items'/>
        <CategoryCard category="camera" title="camera" className='category__items'/>
    </div>
  )
}

export default AllCategory
