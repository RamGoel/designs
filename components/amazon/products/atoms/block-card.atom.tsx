import Image from 'next/image'
import React from 'react'

type BlockCardAtomProps = {
    title: string,
    productImage: string,
    moreText: string,
    moreURL: string
}
const BlockCardAtom = ({ title, productImage, moreText, moreURL }:BlockCardAtomProps) => {
    return (
        <div className='bg-white p-3 w-1/4 mx-2'>
            <div className='w-11/12 mx-auto'>
            <h3 className='font-semibold text-black text-xl'>{title}</h3>
            <Image src={productImage} alt='product-image' style={{
                height: 300,
                objectFit: 'cover'
            }} width={200} className='mx-auto mt-2 mb-3 w-full' height={400} />
            <a href={moreURL} className='text-green-600 text-sm'>{moreText}</a>
            </div>
        </div>
    )
}

export default BlockCardAtom