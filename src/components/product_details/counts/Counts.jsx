import React from 'react'

function Counts({setCount,count}) {
    return (
        <div>
            <div className='productinfo_nItems'>
                <button className='counter' onClick={() => { if (count < 2) { setCount(1) } else { setCount(count - 1) } }}>-</button>
                <p>{count}</p>
                <button className='counter' onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counts
