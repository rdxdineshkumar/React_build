import React from 'react'
import CategoryCard from '../CategoryCard/CardsbyCategory/CategoryCard'

function Categories({categoryName}) {
  return (
    <div>
        <CategoryCard category={categoryName} title={categoryName} className="category_items individual"/>
    </div>
  )
}

export default Categories
