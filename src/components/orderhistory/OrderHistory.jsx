import React from 'react'
import {gql,useQuery} from '@apollo/client'
import './OrderHistory.css'
const History= gql`
query{
    orderHistory{
      title
      description
      image
      price
      status
      quantity
    }
  }
`;
function OrderHistory() {
  const{loading,error,data}=useQuery(History);
  if (loading) return 'loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div className='orderhistory_container'>
        <div className='orderhistory_Details'>
          <h4 className='orderhistory_header'>My Orders</h4>
            {
                data.orderHistory.map(details=>(
                    <div className='ordered_product' key={details.id}>
                        <div className='container1'>
                            <img src={details.image} className='ordered_image'></img>
                        </div>
                        <div className='container2'>
                        <h5>{details.title}</h5>
                        <p>Qty: {details.quantity}</p>
                        <p>Total: ${details.price}</p>
                        <div className='tracking'>
                           <a href='#'>{(details.status==="Delivered!")?"":"track your order"}</a>
                            <p>Status:<span>{details.status}</span></p>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OrderHistory
