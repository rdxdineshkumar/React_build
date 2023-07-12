import React,{useState}from 'react'

function Wishlist() {
    const [color, setColor] = useState(false);
    return (
        <div>
            <a className={color ? 'productinfo_wishlist active' : 'productinfo_wishlist'} href='#' onClick={() => setColor(!color)}>
                <i class="fa-solid fa-heart"></i>
            </a>
        </div>
    )
}

export default Wishlist
