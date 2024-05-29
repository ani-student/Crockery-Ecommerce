import React, { useState } from 'react'

function Cart() {
const [count , setCount] = useState(0)


  return ( 
    <div>Cart{count + 1}</div>

  )
}

export default Cart