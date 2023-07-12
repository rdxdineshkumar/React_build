import { useMutation, gql } from '@apollo/client';
import React from 'react'
import './Counter.css'
import { updateItem } from '../../../graphql/mutations/graphql.mutations';
import { CART_ITEMS } from '../../../graphql/queries/graphql.queries';
function Counter({ count, id }) {
    const [update] = useMutation(updateItem, { refetchQueries: [{ query: CART_ITEMS }] });
    const OnClickDecreser=()=>{
    if(!(count<2)){
        update({variables:{
            id:id,
            Item:"decrease"
        }})
    }
    }
    const OnClickIncreser=()=>{
        update({variables:{
            id:id,
            Item:"increase"
        }})
    }
    return (
        <div>
            <div className='counter_application'>
                <button onClick={OnClickDecreser}><i class="fa-solid fa-angle-left"></i></button>
                <p>{count}</p>
                <button onClick={OnClickIncreser}><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>

    )
}

export default Counter
