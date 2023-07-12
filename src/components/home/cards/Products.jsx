
import React, { useEffect, useState } from 'react'
import './Products.css'
import Card from './Card'
import {useQuery} from '@apollo/client'
import { Collections } from '../../../graphql/queries/graphql.queries'
function Products() {
  const [CardData,setCardData]=useState([]);
  const{data}=useQuery(Collections);
 useEffect(()=>{
  if(data){
    setCardData(data.productsData);
  }
 },[data])
  return (
    <div>
      <Card data={CardData} classtitle="product"/>
    </div>
  )
}
export default Products
