import React from 'react'

function Available({count}) {
    return (
        <div>
            <div className='availabilty'>
                <p>Availabilty: <span style={(count > 0) ? ({ color: '#00bfff', fontWeight: 'bold' }) : ({ color: 'rosybrown' })}>{(count > 0) ? 'In Stock' : 'Out of Stock'}</span></p>
            </div>
        </div>
    )
}

export default Available
