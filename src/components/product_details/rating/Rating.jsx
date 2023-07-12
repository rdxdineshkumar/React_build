import React from 'react'

function Rating({starRating}) {
    return (
        <div>
            <div className='productinfo_rating_container'>
                <div><a className='productinfo_rating' href='#'> {starRating}  <span><i class="fa-solid fa-star"></i></span></a>
                </div>
                <p> @@Rating & @@Reviews</p>
            </div>
        </div>
    )
}

export default Rating
