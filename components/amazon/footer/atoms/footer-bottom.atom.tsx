import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const FooterBottomAtom = () => {
    return (
        <div className='bg-gray-950 my-3 py-5 '>
            <div className='flex  w-1/3 my-3 mx-auto items-center justify-around'>
                <p className='text-xs hover:underline'>Conditions of Use</p>
                <p className='text-xs hover:underline'>Privacy Notice</p>
                <p className='text-xs hover:underline'>Your Ads Privacy Choices</p>
            </div>
            <div className='flex items-center justify-center'>
                <AiOutlineCopyrightCircle />
                <p className='text-xs text-center ml-2'> 1996-2023, Amazon.com, Inc or its affiliates</p>
            </div>
        </div>
    )
}

export default FooterBottomAtom