import React from 'react'
import { useMutation } from '@apollo/client'
import { CART_ITEMS } from '../../../graphql/queries/graphql.queries';
import { addToCart } from '../../../graphql/mutations/graphql.mutations';
import { useHistory } from 'react-router-dom';
function CartButton({ infoToAdd, count, states }) {
    const history=useHistory();
    const [addItemToCart] = useMutation(addToCart, { refetchQueries: [{ query: CART_ITEMS }] });
    const { id, title, image, price } = infoToAdd;
    const id1 = parseInt(id);
    const price1 = parseInt(price);
    const count1 = parseInt(count)
    const onClickHandler = () => {
        console.log(states)
        if (!states) {

            if (infoToAdd) {
                addItemToCart({
                    variables: {
                        id: id1,
                        title,
                        image,
                        price: price1,
                        noOfItems: count1
                    }
                })
            }
        }
        else{
           history.push("/signin") 
        }
    }

    return (
        <div>
            <div className='btns_container'>
                <button className='btn_pry 1' onClick={onClickHandler} ><i class="fa-solid fa-cart-shopping" ></i> Add Cart</button>
                <button className='btn_pry 2' ><i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
            </div>
        </div>
    )
}

export default CartButton
