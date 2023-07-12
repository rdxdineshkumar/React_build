import React,{useState}from 'react'
import Banner from './banners/Banner'
import Cards from './hot_deals/Cards';
import Products from './cards/Products';
import './Home.css'
import laptop from '../../Images/img4.png'
import iphone from '../../Images/img5.png'
import headset from '../../Images/img6.png'
function Home() {
  const[Active,setActive]=useState(1);
  return (
    <div className='home'>
        <Banner/>
        <div className='cards_container'>
          <Cards image={laptop} content='Laptop'/>
          <Cards image={iphone} content='Phone'/>
          <Cards image={headset} content='Accessories'/>
        </div>
        <div className='new_products'>
            <p className='new_products_title'>New products</p>
            <div className='new_products_items'>
                <ul>
                    <li><a className={(Active===1)?"active":null} href='#' onClick={()=>setActive(1)}>All</a></li>
                    <li><a className={(Active===2)?"active":null} href='#' onClick={()=>setActive(2)}>Laptops</a></li>
                    <li><a className={(Active===3)?"active":null} href='#' onClick={()=>setActive(3)}>Smartphones</a></li>
                    <li><a className={(Active===4)?"active":null} href='#' onClick={()=>setActive(4)}>Cameras</a></li>
                    <li><a className={(Active===5)?"active":null} href='#' onClick={()=>setActive(5)} >Accessories</a></li>
                </ul>
            </div>
        </div>
        <Products/>
    </div>
  ) 
}
export default Home
