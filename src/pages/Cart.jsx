import React, { useContext } from 'react'

function Cart() {

  // const { cartItems, list, removeFromCart } = useContext(storeContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>

    </div>

  )
}

export default Cart