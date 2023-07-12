import React, {useState,useEffect} from 'react'
import { removedata } from '../../../graphql/mutations/graphql.mutations'
import { CART_ITEMS } from '../../../graphql/queries/graphql.queries'
import { useMutation } from '@apollo/client'

const Remove = ({id}) => {
const [deleteItem]=useMutation(removedata,{refetchQueries: [{query: CART_ITEMS}]});
const handleDelete=(id)=>{
    if(id){
        deleteItem({variables:{
            id:id,
        }})
    }
}
  return (
    <div className=''>
        <i class="fa-solid fa-xmark" onClick={()=>handleDelete(id)}></i>
    </div>
  )
}

export default Remove;