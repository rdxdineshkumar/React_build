import React, { useEffect } from 'react'
import Card from '../home/cards/Card'
import { useQuery } from '@apollo/client'
import { AllProducts} from '../../graphql/queries/graphql.queries'
import { useState } from 'react';
function Shop() {
    const {data}=useQuery(AllProducts);
    const [allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        if(data){
            setAllProducts(data.AllProducts);
        }
    },[data])
  return (
    <div style={{'backgroundColor':"rgba(0,0,0,0.05)","minWidth":"300px"}}>
        <Card data={allProducts} classtitle="product allproducts"/>
    </div>
  )
}

export default Shop
