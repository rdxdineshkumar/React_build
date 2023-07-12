import React from 'react'

function ProductHeader({header}) {
    return (
        <div>
            <div className='productinfo_title'>
                <h2>{header}</h2>
                <div className='productinfo_share'><a href="#"><i class="fa-solid fa-share"></i> Share</a></div>
            </div>
        </div>
    )
}

export default ProductHeader