import React from 'react'
import BlockCardAtom from './atoms/block-card.atom'
import { CommonConstants } from '@/utils/constants'
import GridCardItem from './atoms/grid-card.atom'

const ProductRow = ({ rowData }: { rowData: any }) => {
    return (
        <div className='flex items-center justify-around w-11/12 mx-auto my-4'>
            {
                rowData.map((item: any, index: number) => {
                    if (item.type === CommonConstants.BLOCK_CARD) {
                        return (
                            <BlockCardAtom key={index} {...item} />
                        )
                    } else {
                        return (
                            <GridCardItem key={index} {...item} />
                        )
                    }
                })
            }
        </div>
    )
}

export default ProductRow