import React from 'react'

function CartSummary({totalPrices,total}) {
  return (
    <div>
        <div className='cart_summary'>
          <h2>Summary</h2>
          <div className='cart_summary_container'>
            <div className='cart_summary_container_details'>
              <h4>No.of Items:{total}</h4>
              <h4>price:${totalPrices}</h4>
            </div>
            <div className='cart_summary_form'>
              <label className='cart_summary_label'>Shipping Charges</label>
              <input className='cart_summary_input' type='text' placeholder='free charges' value="No delivery charges" readOnly></input>
              <label className='cart_summary_label'>Give Code </label>
              <input className='cart_summary_input' type='text' placeholder='Enter your code    '></input>
            </div>
            <div className='cart_summary_total'>
              <h4>Total Price</h4>
              <h4>${totalPrices}</h4>
            </div>
            <button className='cart_summary_button'>CheckOut</button>
          </div>
        </div>
    </div>
  )
}

export default CartSummary
