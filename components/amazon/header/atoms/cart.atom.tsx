import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const CartAtom = () => {
  return (
      <div className='flex items-center justify-center'>
          <AiOutlineShoppingCart className="text-4xl" />
          <p className='font-bold'>Cart</p>
    </div>
  )
}

export default CartAtom