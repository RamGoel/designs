import Image from 'next/image'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
const LanguageAtom = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image src={require('@/public/amazon/flag.png')} alt='flag-image' width={20} height={20} />
            <p className='ml-2 font-bold'>EN</p>
            <AiFillCaretDown />
        </div>
    )
}

export default LanguageAtom