import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CART_ITEMS } from '../../../graphql/queries/graphql.queries'
import './CartIcon.css'

function CartIcon() {
    const [datas,setDatas]=useState([])
    const [total,setTotal]=useState(0);
    const{loading,error,data}=useQuery(CART_ITEMS);
   
    useEffect(()=>{
     if(data){
        setDatas(data.CartItems);
     }   
    },[data])
    useEffect(()=>{
        setTotal(calculateTotal());
    },[datas])
    const calculateTotal = () => {
        let totalItems = 0;
        datas.map((item1) => {
          const noOfItems1 = parseInt(item1.noOfItems)
          totalItems = totalItems + noOfItems1;
        })
        return totalItems
      }
  return (
    <div className='cart_icon'>
        <Link to='/cart' title='Cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        <p className='cart_icon_badge'>{total}</p>
    </div>
  )
}

export default CartIcon
