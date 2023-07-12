import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
function Navbar() {
  const [Active,setActive]=useState(0);
  return (
    <div className='navbar'>
    <div className='navbar_container'>
        <div className='navbar_elements'>
            <Link to='/' className={`btn ${(Active===1)?"active":null}`} onClick={()=>setActive(1)} >Home</Link>
            <Link className={`btn ${(Active===2)?"active":null}`} to='/shop' onClick={()=>setActive(2)} >Shop</Link>
            <Link to='/categories' className={`btn ${(Active===3)?"active":null}`} onClick={()=>setActive(3)} >Categories</Link>
            <Link to="/laptops"className={`btn ${(Active===4)?"active":null}`}  onClick={()=>setActive(4)} >Laptops</Link>
            <Link to="/phones"className={`btn ${(Active===5)?"active":null}`}  onClick={()=>setActive(5)} >Smartphones</Link>
            <Link to="/camera"className={`btn ${(Active===6)?"active":null}`}  onClick={()=>setActive(6)} >Cameras</Link>
            <Link to="/accessories"className={`btn ${(Active===7)?"active":null}`}  onClick={()=>setActive(7)} >Accessories</Link>
            <Link to="/watch"className={`btn ${(Active===8)?"active":null}`}  onClick={()=>setActive(8)} >Watch</Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar
