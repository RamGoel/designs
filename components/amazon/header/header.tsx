import Image from 'next/image'
import React from 'react'
import LocationAtom from './atoms/location.atom'
import SearchAtom from './atoms/search.atom'
import LanguageAtom from './atoms/language.atom'
import HelloSignIn from './atoms/helloSignin.atom'
import ReturnsAtom from './atoms/returns.atom'
import CartAtom from './atoms/cart.atom'
const AmazonHeader = () => {
  return (
    <div className='p-3 w-full  bg-gray-900 flex items-center justify-around'>
      <Image className='invert' alt='amazon-logo' src={require('../../../public/amazon/logo.png')} width={60} height={20} />
      <LocationAtom />
      <SearchAtom />
      <LanguageAtom />
      <HelloSignIn />
      <ReturnsAtom />
      <CartAtom />
    </div>
  )
}

export default AmazonHeader