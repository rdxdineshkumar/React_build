import React from 'react'

function Price({ price }) {
    return (
        <div>
            <div className='product_price_details'>
                <p className='product_price'>$ {price}</p>
                <p>$15.25</p>
                <p>40% off <i class="fa-solid fa-circle-exclamation"></i></p>

            </div>
        </div>
    )
}

export default Price
