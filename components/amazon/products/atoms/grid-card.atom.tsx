import Image from 'next/image'
import React from 'react'

type GridCardAtomProps = {
    title: string,
    productArray: Array<{
        image: string,
        title: string
    }>,
    moreText: string,
    moreURL: string
}
const GridCardItem = ({ title, productArray, moreText, moreURL }: GridCardAtomProps) => {
    return (
        <div className='bg-white p-3 w-1/4 mx-2'>
            <div className='w-11/12 mx-auto'>
                <h3 className='font-semibold text-black text-xl'>{title}</h3>
                <div className='flex items-center mx-2 flex-wrap justify-between'>
                    {
                        productArray.map((item: any, index: number) => (
                            <div key={index} className='my-2 w-1/2 hover:opacity-50 cursor-pointer'>
                                <div className='w-full'>
                                    <Image src={item.image} alt='product-image' style={{
                                        height: 120,
                                        objectFit: 'cover'
                                    }} width={120} className='mx-auto ' height={120} />
                                </div>
                                <div className='w-3/4 mt-2'>
                                    <p className='text-xs text-gray-700'>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <a href={moreURL} className='text-green-600 text-sm'>{moreText}</a>
            </div>
        </div>
    )
}

export default GridCardItem